import React, { useState } from "react";
import { useLocation } from "wouter";
import {
  usePS,
  PS_TOPIC_TAGS,
  STATUS_LABELS,
  REGION_LABELS,
  type PSStatus,
  type PSRegion,
} from "@/lib/positionStatementStore";
import { PSBrainLayout } from "./PSBrainLayout";
import { CheckCircle, Plus, X } from "lucide-react";

const EMPTY_FORM = {
  title: "",
  referenceNumber: "",
  sourceUrl: "",
  lastUpdated: "",
  publishedRegion: "Both" as PSRegion,
  status: "current" as PSStatus,
  topicTags: [] as string[],
  fullTextOrNotes: "",
  shortSummary: "",
  keyPrinciples: "",
  clinicalRelevance: "",
  meqRelevance: "",
  consultantLevelImplications: "",
  commonExamSignals: "",
  relatedRiskDomains: "",
  relatedLegalDomains: "",
  relatedCulturalDomains: "",
  relatedSystemDomains: "",
};

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
        {label}
        {hint && (
          <span className="ml-2 font-normal normal-case text-muted-foreground">{hint}</span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent";

export default function PSBrainAdd() {
  const { addStatement } = usePS();
  const [, navigate] = useLocation();
  const [form, setForm] = useState(EMPTY_FORM);
  const [saved, setSaved] = useState(false);

  function toggleTag(tag: string) {
    setForm((f) => ({
      ...f,
      topicTags: f.topicTags.includes(tag)
        ? f.topicTags.filter((t) => t !== tag)
        : [...f.topicTags, tag],
    }));
  }

  function parseBullet(raw: string): string[] {
    return raw
      .split("\n")
      .map((l) => l.replace(/^[-•*]\s*/, "").trim())
      .filter(Boolean);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addStatement({
      title: form.title,
      referenceNumber: form.referenceNumber,
      sourceUrl: form.sourceUrl,
      lastUpdated: form.lastUpdated,
      publishedRegion: form.publishedRegion,
      status: form.status,
      topicTags: form.topicTags,
      fullTextOrNotes: form.fullTextOrNotes,
      shortSummary: form.shortSummary,
      keyPrinciples: parseBullet(form.keyPrinciples),
      clinicalRelevance: form.clinicalRelevance,
      meqRelevance: form.meqRelevance,
      consultantLevelImplications: form.consultantLevelImplications,
      commonExamSignals: parseBullet(form.commonExamSignals),
      relatedRiskDomains: parseBullet(form.relatedRiskDomains),
      relatedLegalDomains: parseBullet(form.relatedLegalDomains),
      relatedCulturalDomains: parseBullet(form.relatedCulturalDomains),
      relatedSystemDomains: parseBullet(form.relatedSystemDomains),
    });
    setSaved(true);
    setTimeout(() => {
      navigate("/brain/ps");
    }, 1200);
  }

  if (saved) {
    return (
      <PSBrainLayout>
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <CheckCircle className="w-12 h-12 text-emerald-500" />
          <p className="text-lg font-serif font-bold text-primary">Position statement saved</p>
          <p className="text-sm text-muted-foreground">Redirecting to library…</p>
        </div>
      </PSBrainLayout>
    );
  }

  return (
    <PSBrainLayout>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-1">
            Add RANZCP Position Statement
          </h2>
          <p className="text-sm text-muted-foreground">
            Enter details from the official RANZCP website. All fields improve quiz stem generation and feedback quality.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-5">
          <h3 className="font-serif font-bold text-primary text-base border-b border-border pb-2">
            Identity
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Title" hint="required">
              <input
                required
                type="text"
                className={`${inputCls} h-11`}
                placeholder="e.g. Mental Health of Aboriginal and Torres Strait Islander Peoples"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />
            </Field>

            <Field label="Reference number">
              <input
                type="text"
                className={`${inputCls} h-11`}
                placeholder="e.g. PS #48 — verify at ranzcp.org"
                value={form.referenceNumber}
                onChange={(e) => setForm((f) => ({ ...f, referenceNumber: e.target.value }))}
              />
            </Field>

            <Field label="Source URL">
              <input
                type="url"
                className={`${inputCls} h-11`}
                placeholder="https://www.ranzcp.org/..."
                value={form.sourceUrl}
                onChange={(e) => setForm((f) => ({ ...f, sourceUrl: e.target.value }))}
              />
            </Field>

            <Field label="Last updated" hint="YYYY-MM-DD or leave blank">
              <input
                type="date"
                className={`${inputCls} h-11`}
                value={form.lastUpdated}
                onChange={(e) => setForm((f) => ({ ...f, lastUpdated: e.target.value }))}
              />
            </Field>

            <Field label="Status">
              <select
                className={`${inputCls} h-11`}
                value={form.status}
                onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as PSStatus }))}
              >
                {(Object.entries(STATUS_LABELS) as [PSStatus, string][]).map(([val, label]) => (
                  <option key={val} value={val}>{label}</option>
                ))}
              </select>
            </Field>

            <Field label="Jurisdiction">
              <select
                className={`${inputCls} h-11`}
                value={form.publishedRegion}
                onChange={(e) => setForm((f) => ({ ...f, publishedRegion: e.target.value as PSRegion }))}
              >
                {(Object.entries(REGION_LABELS) as [PSRegion, string][]).map(([val, label]) => (
                  <option key={val} value={val}>{label}</option>
                ))}
              </select>
            </Field>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-4">
          <h3 className="font-serif font-bold text-primary text-base border-b border-border pb-2">
            Topic Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {PS_TOPIC_TAGS.map((tag) => {
              const selected = form.topicTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                    selected
                      ? "bg-accent text-white border-accent"
                      : "bg-white text-muted-foreground border-border hover:border-accent hover:text-accent"
                  }`}
                >
                  {selected && <X className="w-3 h-3 inline mr-1 -mt-0.5" />}
                  {tag}
                </button>
              );
            })}
          </div>
          {form.topicTags.length > 0 && (
            <p className="text-xs text-muted-foreground">
              {form.topicTags.length} tag{form.topicTags.length !== 1 ? "s" : ""} selected
            </p>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-5">
          <h3 className="font-serif font-bold text-primary text-base border-b border-border pb-2">
            Content
          </h3>

          <Field label="Short summary" hint="1–3 sentences">
            <textarea
              rows={3}
              className={`${inputCls} py-2.5 resize-y`}
              placeholder="Core position and key message of this statement…"
              value={form.shortSummary}
              onChange={(e) => setForm((f) => ({ ...f, shortSummary: e.target.value }))}
            />
          </Field>

          <Field label="Key principles" hint="one per line">
            <textarea
              rows={5}
              className={`${inputCls} py-2.5 resize-y`}
              placeholder="- Cultural safety is not merely communication…&#10;- Aboriginal people have the right to self-determination…"
              value={form.keyPrinciples}
              onChange={(e) => setForm((f) => ({ ...f, keyPrinciples: e.target.value }))}
            />
          </Field>

          <Field label="Clinical relevance">
            <textarea
              rows={3}
              className={`${inputCls} py-2.5 resize-y`}
              placeholder="How does this position statement directly affect clinical practice in the MEQ setting?"
              value={form.clinicalRelevance}
              onChange={(e) => setForm((f) => ({ ...f, clinicalRelevance: e.target.value }))}
            />
          </Field>

          <Field label="MEQ relevance">
            <textarea
              rows={3}
              className={`${inputCls} py-2.5 resize-y`}
              placeholder="Which signal categories does this statement influence? What do examiners reward?"
              value={form.meqRelevance}
              onChange={(e) => setForm((f) => ({ ...f, meqRelevance: e.target.value }))}
            />
          </Field>

          <Field label="Consultant-level implications">
            <textarea
              rows={3}
              className={`${inputCls} py-2.5 resize-y`}
              placeholder="What does a consultant psychiatrist specifically need to do (beyond registrar-level)?"
              value={form.consultantLevelImplications}
              onChange={(e) => setForm((f) => ({ ...f, consultantLevelImplications: e.target.value }))}
            />
          </Field>

          <Field label="Full text / notes" hint="optional — paste key excerpts or your notes">
            <textarea
              rows={6}
              className={`${inputCls} py-2.5 resize-y`}
              placeholder="Paste key sections or your study notes about this statement…"
              value={form.fullTextOrNotes}
              onChange={(e) => setForm((f) => ({ ...f, fullTextOrNotes: e.target.value }))}
            />
          </Field>
        </div>

        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-5">
          <h3 className="font-serif font-bold text-primary text-base border-b border-border pb-2">
            Exam Signals &amp; Related Domains
          </h3>

          <Field label="Common exam signals" hint="one per line">
            <textarea
              rows={4}
              className={`${inputCls} py-2.5 resize-y`}
              placeholder="- Cultural safety — not just communication preference&#10;- Intergenerational trauma&#10;- Aboriginal health worker engagement"
              value={form.commonExamSignals}
              onChange={(e) => setForm((f) => ({ ...f, commonExamSignals: e.target.value }))}
            />
          </Field>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Risk domains" hint="one per line">
              <textarea
                rows={3}
                className={`${inputCls} py-2.5 resize-y`}
                value={form.relatedRiskDomains}
                onChange={(e) => setForm((f) => ({ ...f, relatedRiskDomains: e.target.value }))}
              />
            </Field>
            <Field label="Legal domains" hint="one per line">
              <textarea
                rows={3}
                className={`${inputCls} py-2.5 resize-y`}
                value={form.relatedLegalDomains}
                onChange={(e) => setForm((f) => ({ ...f, relatedLegalDomains: e.target.value }))}
              />
            </Field>
            <Field label="Cultural domains" hint="one per line">
              <textarea
                rows={3}
                className={`${inputCls} py-2.5 resize-y`}
                value={form.relatedCulturalDomains}
                onChange={(e) => setForm((f) => ({ ...f, relatedCulturalDomains: e.target.value }))}
              />
            </Field>
            <Field label="Systems domains" hint="one per line">
              <textarea
                rows={3}
                className={`${inputCls} py-2.5 resize-y`}
                value={form.relatedSystemDomains}
                onChange={(e) => setForm((f) => ({ ...f, relatedSystemDomains: e.target.value }))}
              />
            </Field>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!form.title}
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Plus className="w-4 h-4" />
            Save position statement
          </button>
          <button
            type="button"
            onClick={() => navigate("/brain/ps")}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </PSBrainLayout>
  );
}
