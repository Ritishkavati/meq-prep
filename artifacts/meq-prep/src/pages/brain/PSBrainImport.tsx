import React, { useState, useRef } from "react";
import { usePS } from "@/lib/positionStatementStore";
import { PSBrainLayout } from "./PSBrainLayout";
import {
  Link2, Upload, Plus, Trash2, ExternalLink, CheckCircle,
  FileText, AlertTriangle, X,
} from "lucide-react";
import { format } from "date-fns";

type Tab = "url" | "upload";

const inputCls =
  "w-full px-3 h-11 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent";

export default function PSBrainImport() {
  const { urlLibrary, addUrl, deleteUrl } = usePS();
  const [tab, setTab] = useState<Tab>("url");

  const [urlForm, setUrlForm] = useState({ url: "", title: "", referenceNumber: "", notes: "" });
  const [urlSaved, setUrlSaved] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [importedFiles, setImportedFiles] = useState<string[]>([]);

  function handleAddUrl(e: React.FormEvent) {
    e.preventDefault();
    if (!urlForm.url) return;
    addUrl({
      url: urlForm.url,
      title: urlForm.title || urlForm.url,
      referenceNumber: urlForm.referenceNumber,
      extractionStatus: "manual",
      notes: urlForm.notes,
    });
    setUrlForm({ url: "", title: "", referenceNumber: "", notes: "" });
    setUrlSaved(true);
    setTimeout(() => setUrlSaved(false), 2000);
  }

  function handleFileDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    files.forEach((f) => setImportedFiles((prev) => [...prev, f.name]));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    files.forEach((f) => setImportedFiles((prev) => [...prev, f.name]));
  }

  return (
    <PSBrainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-1">
            Import / URL Library
          </h2>
          <p className="text-sm text-muted-foreground">
            Store official RANZCP position statement links or bulk-import from files. Web
            extraction is not available in this version — create placeholder cards and fill
            details manually.
          </p>
        </div>

        <div className="flex gap-1 bg-white border border-card-border rounded-xl p-1">
          {(
            [
              { key: "url" as Tab, label: "URL Library", icon: Link2 },
              { key: "upload" as Tab, label: "Bulk Import", icon: Upload },
            ] as const
          ).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                tab === key
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {tab === "url" && (
          <>
            <form
              onSubmit={handleAddUrl}
              className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-4"
            >
              <h3 className="font-serif font-bold text-primary text-base">Add URL</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
                    Official RANZCP URL <span className="font-normal normal-case text-muted-foreground">— required</span>
                  </label>
                  <input
                    required
                    type="url"
                    className={inputCls}
                    placeholder="https://www.ranzcp.org/clinical-guidelines-publications/..."
                    value={urlForm.url}
                    onChange={(e) => setUrlForm((f) => ({ ...f, url: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
                    Title <span className="font-normal normal-case text-muted-foreground">— optional</span>
                  </label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="e.g. Cultural Safety in Psychiatry"
                    value={urlForm.title}
                    onChange={(e) => setUrlForm((f) => ({ ...f, title: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
                    Reference number
                  </label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="e.g. PS #48"
                    value={urlForm.referenceNumber}
                    onChange={(e) => setUrlForm((f) => ({ ...f, referenceNumber: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Notes</label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="e.g. Check annually; key for Aboriginal health stems"
                    value={urlForm.notes}
                    onChange={(e) => setUrlForm((f) => ({ ...f, notes: e.target.value }))}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Store link
                </button>
                {urlSaved && (
                  <span className="flex items-center gap-1.5 text-sm text-emerald-700 font-medium">
                    <CheckCircle className="w-4 h-4" /> Saved
                  </span>
                )}
              </div>
            </form>

            <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
              <h3 className="font-serif font-bold text-primary text-base mb-4">
                Stored URLs ({urlLibrary.length})
              </h3>
              {urlLibrary.length === 0 ? (
                <p className="text-sm text-muted-foreground">No URLs stored yet.</p>
              ) : (
                <div className="divide-y divide-border">
                  {urlLibrary.map((entry) => (
                    <div key={entry.id} className="py-3.5 flex items-start gap-3">
                      <Link2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          {entry.referenceNumber && (
                            <span className="text-xs font-mono font-bold text-muted-foreground bg-gray-100 px-2 py-0.5 rounded">
                              {entry.referenceNumber}
                            </span>
                          )}
                          <p className="text-sm font-medium text-primary truncate">
                            {entry.title}
                          </p>
                        </div>
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent hover:underline flex items-center gap-1 mt-0.5 truncate"
                        >
                          {entry.url}
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </a>
                        {entry.notes && (
                          <p className="text-xs text-muted-foreground mt-0.5 italic">{entry.notes}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Added {format(new Date(entry.addedAt), "d MMM yyyy")} ·{" "}
                          <span
                            className={
                              entry.extractionStatus === "extracted"
                                ? "text-emerald-600"
                                : "text-amber-600"
                            }
                          >
                            {entry.extractionStatus === "extracted"
                              ? "Extracted"
                              : "Manual — fill details via Add Statement"}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => deleteUrl(entry.id)}
                          className="text-muted-foreground hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <p className="font-semibold mb-1">No automatic web extraction in this version</p>
              <p>
                Paste the URL to store the link, then use{" "}
                <strong>Add Statement</strong> to fill in title, reference number, key principles, and MEQ
                relevance manually from the RANZCP website. Future AI integration will automate this.
              </p>
            </div>
          </>
        )}

        {tab === "upload" && (
          <>
            <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-4">
              <h3 className="font-serif font-bold text-primary text-base">
                Bulk Import
              </h3>
              <p className="text-sm text-muted-foreground">
                Upload PDFs, DOCX, TXT or CSV files containing RANZCP position statements or
                your study summaries. Files are stored as placeholders — fill details
                manually via Add Statement.
              </p>

              <div
                className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
                  dragging
                    ? "border-accent bg-accent/5"
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
                  accept=".pdf,.docx,.doc,.txt,.csv"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-primary font-medium">
                  Drop files here or click to browse
                </p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, TXT, CSV</p>
              </div>

              {importedFiles.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Imported this session ({importedFiles.length})
                  </h4>
                  {importedFiles.map((name, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2.5">
                      <FileText className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-primary flex-1 truncate">{name}</span>
                      <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Manual entry required
                      </span>
                      <button
                        onClick={() => setImportedFiles((f) => f.filter((_, j) => j !== i))}
                        className="text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground italic">
                    Use <strong>Add Statement</strong> to create entries for each imported file.
                    Automatic AI extraction will be available in a future version.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-3">
              <h3 className="font-serif font-bold text-primary text-base">
                CSV Import Format
              </h3>
              <p className="text-sm text-muted-foreground">
                You can prepare a CSV with these columns to import multiple position statements
                at once. Paste into the upload zone above — manual review of each entry is
                still required.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs text-gray-700 overflow-x-auto">
                <p className="font-bold mb-1 text-gray-500"># Expected CSV columns:</p>
                <p>title, reference_number, source_url, last_updated, region, status,</p>
                <p>topic_tags (pipe-separated), short_summary, key_principles (pipe-separated),</p>
                <p>meq_relevance, consultant_level_implications, common_exam_signals (pipe-separated)</p>
              </div>
            </div>
          </>
        )}
      </div>
    </PSBrainLayout>
  );
}
