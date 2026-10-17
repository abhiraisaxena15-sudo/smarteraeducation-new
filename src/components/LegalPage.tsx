import { ArrowLeft } from 'lucide-react';
import type { LegalPage as LegalPageData } from '../data/legal';

export default function LegalPage({ page }: { page: LegalPageData }) {
  return (
    <main className="pt-28 md:pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
        <article className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {page.title}
          </h1>
          <p className="text-sm text-slate-400 mb-8">Last updated: {page.updated}</p>
          <div className="space-y-8">
            {page.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-lg font-bold text-navy-900 mb-2">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-2">{p}</p>
                ))}
                {s.list && (
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600 leading-relaxed">
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
