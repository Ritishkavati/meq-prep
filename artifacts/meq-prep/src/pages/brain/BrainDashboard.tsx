import React from "react";
import { useBrain, PROCESSING_LABELS } from "@/lib/brainStore";
import { BrainLayout } from "./BrainLayout";
import { Link } from "wouter";
import { FileText, BookOpen, Map, Tag, Clock, CheckCircle, AlertCircle, Loader2, Upload, BookMarked, Link2 } from "lucide-react";
import { format } from "date-fns";

function StatusBadge({ status }: { status: string }) {
  if (status === "ready")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
        <CheckCircle className="w-3 h-3" /> Ready
      </span>
    );
  if (status === "error")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
        <AlertCircle className="w-3 h-3" /> Error
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
      <Loader2 className="w-3 h-3 animate-spin" /> {PROCESSING_LABELS[status as keyof typeof PROCESSING_LABELS] ?? status}
    </span>
  );
}

export default function BrainDashboard() {
  const { uploadedFiles, signalMaps, extractedItems } = useBrain();

  const totalTags = Array.from(
    new Set(uploadedFiles.flatMap((f) => f.topicTags))
  ).length;

  const lastUpload = uploadedFiles.length
    ? uploadedFiles.reduce((a, b) => (a.uploadedAt > b.uploadedAt ? a : b))
    : null;

  const stats = [
    { label: "Uploaded files", value: uploadedFiles.length, icon: FileText, color: "text-primary" },
    { label: "Extracted questions", value: extractedItems.length, icon: BookOpen, color: "text-accent" },
    { label: "Signal maps", value: signalMaps.length, icon: Map, color: "text-primary" },
    { label: "Topic tags", value: totalTags, icon: Tag, color: "text-accent" },
  ];

  return (
    <BrainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-1">Dashboard</h2>
          <p className="text-sm text-muted-foreground">
            Overview of your private MEQ knowledge base.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="bg-white rounded-2xl border border-card-border shadow-sm p-5 flex flex-col gap-2"
            >
              <Icon className={`w-5 h-5 ${color}`} />
              <p className="text-3xl font-bold text-primary">{value}</p>
              <p className="text-xs text-muted-foreground leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif font-bold text-primary text-base">Last upload</h3>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </div>
            {lastUpload ? (
              <div>
                <p className="font-medium text-primary text-sm truncate">{lastUpload.filename}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {format(lastUpload.uploadedAt, "d MMM yyyy, h:mm a")}
                </p>
                <div className="mt-3">
                  <StatusBadge status={lastUpload.processingStatus} />
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No files uploaded yet.</p>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5">
            <h3 className="font-serif font-bold text-primary text-base mb-4">
              All files — processing status
            </h3>
            {uploadedFiles.length === 0 ? (
              <p className="text-sm text-muted-foreground">No files yet.</p>
            ) : (
              <ul className="space-y-2">
                {uploadedFiles.map((f) => (
                  <li key={f.id} className="flex items-center justify-between gap-2 text-sm">
                    <span className="truncate text-primary font-medium flex-1">{f.filename}</span>
                    <StatusBadge status={f.processingStatus} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-serif font-bold text-primary">Ready to add more material?</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Upload PDFs, DOCX, TXT, Markdown or CSV files to grow your knowledge base.
            </p>
          </div>
          <Link
            href="/brain/upload"
            className="flex-shrink-0 flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Upload materials
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/brain/ps/add"
            className="bg-white rounded-2xl border border-card-border shadow-sm p-5 flex items-center gap-4 hover:border-accent hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <BookMarked className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-serif font-bold text-primary text-sm">
                Add RANZCP Position Statement
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Record key principles, MEQ relevance and exam signals from official RANZCP policy.
              </p>
            </div>
          </Link>

          <Link
            href="/brain/ps/import"
            className="bg-white rounded-2xl border border-card-border shadow-sm p-5 flex items-center gap-4 hover:border-accent hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Link2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-serif font-bold text-primary text-sm">
                Import Position Statement Library
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Store official RANZCP URLs or bulk-import from PDF, DOCX or CSV files.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </BrainLayout>
  );
}
