import React, { useState, useRef } from "react";
import { useBrain, UPLOAD_CATEGORY_LABELS, PERMISSION_LABELS, PROCESSING_LABELS, UploadCategory, PermissionStatus, ProcessingStatus } from "@/lib/brainStore";
import { BrainLayout } from "./BrainLayout";
import { Upload, FileText, X, CheckCircle, AlertCircle, Loader2, ChevronRight } from "lucide-react";

const ACCEPTED = ".pdf,.docx,.doc,.txt,.md,.csv";

interface FormState {
  sourceName: string;
  year: string;
  uploadCategory: UploadCategory;
  permissionStatus: PermissionStatus;
  topicTagsRaw: string;
}

const PROCESSING_STEP_ORDER: ProcessingStatus[] = [
  "uploaded",
  "extracting_text",
  "splitting_sections",
  "detecting_stems",
  "detecting_tags",
  "detecting_signals",
  "ready",
];

function ProcessingTracker({ status }: { status: ProcessingStatus }) {
  const current = PROCESSING_STEP_ORDER.indexOf(status);
  return (
    <div className="mt-4 space-y-1.5">
      {PROCESSING_STEP_ORDER.filter((s) => s !== "error").map((step, i) => {
        const done = i < current;
        const active = i === current;
        const pending = i > current;
        return (
          <div key={step} className="flex items-center gap-2 text-sm">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                done
                  ? "bg-emerald-100 text-emerald-600"
                  : active
                  ? "bg-accent/10 text-accent"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {done ? (
                <CheckCircle className="w-3.5 h-3.5" />
              ) : active ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
              )}
            </div>
            <span
              className={
                done
                  ? "text-emerald-700 font-medium"
                  : active
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }
            >
              {PROCESSING_LABELS[step]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function BrainUpload() {
  const { uploadedFiles, addFile, advanceProcessing, deleteFile } = useBrain();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [justUploadedId, setJustUploadedId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    sourceName: "",
    year: new Date().getFullYear().toString(),
    uploadCategory: "old_meq_questions",
    permissionStatus: "personal_study_only",
    topicTagsRaw: "",
  });

  function handleFileDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile) return;
    const ext = selectedFile.name.split(".").pop()?.toLowerCase() ?? "unknown";
    const id = addFile({
      filename: selectedFile.name,
      fileType: ext,
      uploadCategory: form.uploadCategory,
      sourceName: form.sourceName || selectedFile.name,
      year: form.year,
      permissionStatus: form.permissionStatus,
      topicTags: form.topicTagsRaw
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    });
    setJustUploadedId(id);
    setSelectedFile(null);
    setForm({
      sourceName: "",
      year: new Date().getFullYear().toString(),
      uploadCategory: "old_meq_questions",
      permissionStatus: "personal_study_only",
      topicTagsRaw: "",
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  const justUploaded = justUploadedId
    ? uploadedFiles.find((f) => f.id === justUploadedId)
    : null;

  return (
    <BrainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-1">Upload Materials</h2>
          <p className="text-sm text-muted-foreground">
            Add MEQ questions, marking guides, model answers, clinical frameworks and personal notes
            to your private knowledge base.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-5"
        >
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
              dragging
                ? "border-accent bg-accent/5"
                : selectedFile
                ? "border-emerald-400 bg-emerald-50"
                : "border-border hover:border-accent hover:bg-accent/5"
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleFileDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept={ACCEPTED}
              className="hidden"
              onChange={handleFileChange}
            />
            {selectedFile ? (
              <div className="flex items-center justify-center gap-3">
                <FileText className="w-6 h-6 text-emerald-600" />
                <span className="font-medium text-primary">{selectedFile.name}</span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setSelectedFile(null); }}
                  className="text-muted-foreground hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div>
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-primary font-medium">
                  Drop a file here or click to browse
                </p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, TXT, Markdown, CSV</p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
                Upload category
              </label>
              <select
                className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.uploadCategory}
                onChange={(e) =>
                  setForm((f) => ({ ...f, uploadCategory: e.target.value as UploadCategory }))
                }
              >
                {(Object.entries(UPLOAD_CATEGORY_LABELS) as [UploadCategory, string][]).map(
                  ([val, label]) => (
                    <option key={val} value={val}>
                      {label}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
                Permission status
              </label>
              <select
                className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.permissionStatus}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    permissionStatus: e.target.value as PermissionStatus,
                  }))
                }
              >
                {(Object.entries(PERMISSION_LABELS) as [PermissionStatus, string][]).map(
                  ([val, label]) => (
                    <option key={val} value={val}>
                      {label}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
                Source name
              </label>
              <input
                type="text"
                className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g. Personal study notes, Study group"
                value={form.sourceName}
                onChange={(e) => setForm((f) => ({ ...f, sourceName: e.target.value }))}
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
                Year
              </label>
              <input
                type="text"
                className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g. 2024"
                value={form.year}
                onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))}
              />
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
                Topic tags <span className="font-normal text-muted-foreground normal-case">(comma-separated)</span>
              </label>
              <input
                type="text"
                className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g. psychosis, risk, Mental Health Act"
                value={form.topicTagsRaw}
                onChange={(e) => setForm((f) => ({ ...f, topicTagsRaw: e.target.value }))}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!selectedFile}
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Upload className="w-4 h-4" />
            Upload file
          </button>
        </form>

        {justUploaded && (
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-serif font-bold text-primary">Processing: {justUploaded.filename}</h3>
              <span className="text-xs text-muted-foreground">Exam type: MEQ</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              In a live system, the AI engine would now process your document. Step through the
              stages below to simulate processing.
            </p>
            <ProcessingTracker status={justUploaded.processingStatus} />
            {justUploaded.processingStatus !== "ready" && (
              <button
                className="mt-4 flex items-center gap-1.5 text-sm text-accent font-semibold hover:underline"
                onClick={() => advanceProcessing(justUploaded.id)}
              >
                Advance to next step <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {justUploaded.processingStatus === "ready" && (
              <p className="mt-4 text-sm text-emerald-700 font-medium flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Document ready for retrieval.
              </p>
            )}
          </div>
        )}

        {uploadedFiles.length > 0 && (
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
            <h3 className="font-serif font-bold text-primary text-base mb-4">
              Uploaded files ({uploadedFiles.length})
            </h3>
            <div className="divide-y divide-border">
              {uploadedFiles.map((f) => (
                <div key={f.id} className="py-3 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-primary truncate">{f.filename}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {UPLOAD_CATEGORY_LABELS[f.uploadCategory]} &middot;{" "}
                      {PERMISSION_LABELS[f.permissionStatus]} &middot; {f.year}
                    </p>
                    {f.topicTags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {f.topicTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {f.processingStatus === "ready" ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : f.processingStatus === "error" ? (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    ) : (
                      <Loader2 className="w-4 h-4 text-amber-500 animate-spin" />
                    )}
                    <button
                      onClick={() => deleteFile(f.id)}
                      className="text-muted-foreground hover:text-red-500 transition-colors"
                      title="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </BrainLayout>
  );
}
