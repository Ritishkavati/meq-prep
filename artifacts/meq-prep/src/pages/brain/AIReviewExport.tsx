import React, { useState, useCallback } from "react";
import { BrainLayout } from "./BrainLayout";
import { useBrain } from "@/lib/brainStore";
import {
  buildAIReviewExport, buildAIReviewJSON, auditAllQuizStems,
  TOPIC_FILE_MAP,
} from "@/lib/aiReviewExport";
import { QUIZ_STEMS, TOPIC_LABELS } from "@/lib/quizData";
import {
  FileDown, Copy, CheckCheck, RefreshCw, FileJson, ClipboardList, BookOpen,
} from "lucide-react";

function CopyButton({ getText, label }: { getText: () => string; label: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(getText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 border border-card-border text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors"
    >
      {copied ? <CheckCheck className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copied!" : label}
    </button>
  );
}

function DownloadButton({
  getText, filename, label, icon: Icon,
}: {
  getText: () => string;
  filename: string;
  label: string;
  icon: React.ElementType;
}) {
  function handleDownload() {
    const blob = new Blob([getText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}

export default function AIReviewExport() {
  const { uploadedFiles, knowledgeChunks, extractedItems, signalMaps } = useBrain();
  const [generated, setGenerated] = useState(false);
  const [markdownText, setMarkdownText] = useState("");

  const opts = { uploadedFiles, knowledgeChunks, extractedItems, signalMaps };

  const generateExport = useCallback(() => {
    setMarkdownText(buildAIReviewExport(opts));
    setGenerated(true);
  }, [uploadedFiles, knowledgeChunks, extractedItems, signalMaps]);

  const getMarkdown = () => markdownText || buildAIReviewExport(opts);
  const getJSON = () => JSON.stringify(buildAIReviewJSON(opts), null, 2);

  const audit = auditAllQuizStems();
  const passCount = audit.filter((a) => a.rating === "pass").length;
  const warnCount = audit.filter((a) => a.rating === "warn").length;
  const failCount = audit.filter((a) => a.rating === "fail").length;

  const topicCounts: Record<string, number> = {};
  for (const s of QUIZ_STEMS) {
    topicCounts[s.topic] = (topicCounts[s.topic] ?? 0) + 1;
  }

  const importInstructions = Object.entries(TOPIC_FILE_MAP)
    .map(([topic, file]) => {
      const label = TOPIC_LABELS[topic as keyof typeof TOPIC_LABELS] ?? topic;
      return `- **${label}** → \`src/lib/questions/${file}\``;
    })
    .join("\n");

  return (
    <BrainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-1">AI Review Export</h2>
          <p className="text-sm text-muted-foreground">
            Export the full knowledge base and question bank as Markdown or JSON for review in ChatGPT or Claude.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white rounded-xl border border-card-border p-4 text-center">
            <p className="text-2xl font-bold text-primary">{QUIZ_STEMS.length}</p>
            <p className="text-xs text-muted-foreground mt-0.5">Quiz stems</p>
          </div>
          <div className="bg-white rounded-xl border border-card-border p-4 text-center">
            <p className="text-2xl font-bold text-primary">{uploadedFiles.length}</p>
            <p className="text-xs text-muted-foreground mt-0.5">Uploaded files</p>
          </div>
          <div className="bg-white rounded-xl border border-card-border p-4 text-center">
            <p className="text-2xl font-bold text-accent">{passCount}</p>
            <p className="text-xs text-muted-foreground mt-0.5">Audit passes</p>
          </div>
          <div className="bg-white rounded-xl border border-card-border p-4 text-center">
            <p className={`text-2xl font-bold ${failCount > 0 ? "text-red-600" : "text-emerald-600"}`}>
              {failCount}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">Audit fails</p>
          </div>
        </div>

        {/* Generate + download buttons */}
        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-4">
          <h3 className="font-serif font-bold text-primary text-base">Generate Export</h3>
          <p className="text-sm text-muted-foreground">
            Generate the full export first, then copy or download. The Markdown export is designed to paste directly into ChatGPT or Claude.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={generateExport}
              className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              {generated ? "Regenerate Export" : "Generate Review Export"}
            </button>
          </div>

          {generated && (
            <div className="flex flex-wrap gap-3 pt-2 border-t border-card-border">
              <CopyButton getText={getMarkdown} label="Copy Markdown Export" />
              <CopyButton
                getText={() => importInstructions}
                label="Copy Import Instructions"
              />
              <DownloadButton
                getText={getMarkdown}
                filename={`meq-prep-review-${new Date().toISOString().slice(0, 10)}.md`}
                label="Download Markdown"
                icon={FileDown}
              />
              <DownloadButton
                getText={getJSON}
                filename={`meq-prep-review-${new Date().toISOString().slice(0, 10)}.json`}
                label="Download JSON"
                icon={FileJson}
              />
            </div>
          )}
        </div>

        {/* Markdown preview */}
        {generated && (
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-primary text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                Export Preview
              </h3>
              <span className="text-xs text-muted-foreground">
                {markdownText.length.toLocaleString()} characters
              </span>
            </div>
            <pre className="bg-slate-50 rounded-xl border border-card-border p-4 text-xs text-slate-700 leading-relaxed overflow-auto max-h-96 whitespace-pre-wrap font-mono">
              {markdownText}
            </pre>
          </div>
        )}

        {/* Quality audit table */}
        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-4">
          <h3 className="font-serif font-bold text-primary text-base flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-accent" />
            Question Quality Audit
          </h3>
          <div className="flex gap-4 text-sm">
            <span className="text-emerald-700 font-semibold">✅ {passCount} pass</span>
            <span className="text-amber-700 font-semibold">⚠️ {warnCount} warn</span>
            <span className="text-red-700 font-semibold">❌ {failCount} fail</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border text-left text-xs text-muted-foreground">
                  <th className="pb-2 pr-4 font-semibold">ID</th>
                  <th className="pb-2 pr-4 font-semibold">Title</th>
                  <th className="pb-2 pr-4 font-semibold">Topic</th>
                  <th className="pb-2 pr-4 font-semibold">Rating</th>
                  <th className="pb-2 font-semibold">Issues</th>
                </tr>
              </thead>
              <tbody>
                {audit.map((a) => (
                  <tr key={a.stemId} className="border-b border-card-border/50 align-top">
                    <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">{a.stemId}</td>
                    <td className="py-2 pr-4 font-medium text-primary text-xs">{a.stemTitle}</td>
                    <td className="py-2 pr-4 text-xs text-muted-foreground">
                      {TOPIC_LABELS[a.topic as keyof typeof TOPIC_LABELS] ?? a.topic}
                    </td>
                    <td className="py-2 pr-4">
                      <span
                        className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${
                          a.rating === "pass"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : a.rating === "warn"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {a.rating === "pass" ? "✅ Pass" : a.rating === "warn" ? "⚠️ Warn" : "❌ Fail"}
                      </span>
                    </td>
                    <td className="py-2 text-xs text-muted-foreground">
                      {a.issues.length === 0 ? (
                        <span className="text-emerald-600">None</span>
                      ) : (
                        <ul className="space-y-0.5">
                          {a.issues.map((issue, i) => (
                            <li key={i} className="text-amber-800">• {issue}</li>
                          ))}
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Import instructions */}
        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-3">
          <h3 className="font-serif font-bold text-primary text-base">Replit Import Instructions</h3>
          <p className="text-sm text-muted-foreground">
            When improved content comes back from ChatGPT/Claude, paste it into these files:
          </p>
          <div className="bg-slate-50 rounded-xl border border-card-border p-4 space-y-1.5">
            {Object.entries(TOPIC_FILE_MAP).map(([topic, file]) => (
              <div key={topic} className="flex items-start gap-2 text-xs">
                <span className="text-muted-foreground font-medium min-w-[180px]">
                  {TOPIC_LABELS[topic as keyof typeof TOPIC_LABELS] ?? topic}
                </span>
                <code className="text-accent font-mono">src/lib/questions/{file}</code>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 space-y-1">
            <p><strong>After pasting improved stems:</strong></p>
            <p>Run <code className="font-mono">pnpm --filter @workspace/meq-prep run typecheck</code> to catch any type errors before saving.</p>
          </div>
        </div>

        {/* Workflow steps */}
        <div className="bg-primary/5 rounded-2xl border border-primary/10 p-5 space-y-3">
          <h3 className="font-serif font-bold text-primary text-sm">Review Workflow</h3>
          <ol className="space-y-2 text-sm text-primary">
            <li className="flex gap-3"><span className="font-bold text-accent">1.</span> Click <strong>Generate Review Export</strong> above.</li>
            <li className="flex gap-3"><span className="font-bold text-accent">2.</span> Click <strong>Copy Markdown Export</strong> or Download Markdown.</li>
            <li className="flex gap-3"><span className="font-bold text-accent">3.</span> Paste into ChatGPT or Claude — the export includes review instructions automatically.</li>
            <li className="flex gap-3"><span className="font-bold text-accent">4.</span> Review and reorganise the returned content.</li>
            <li className="flex gap-3"><span className="font-bold text-accent">5.</span> Paste improved stems into the correct <code className="font-mono text-xs bg-white border border-card-border px-1 py-0.5 rounded">questions/*.ts</code> files and typecheck.</li>
          </ol>
        </div>
      </div>
    </BrainLayout>
  );
}
