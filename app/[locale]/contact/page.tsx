import type { Metadata } from "next";
import { type Locale, getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDict(locale as Locale).contact.heading };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const c = getDict(locale as Locale).contact;

  const inputClass = "w-full px-4 py-3 text-sm font-light focus:outline-none transition-colors duration-200";
  const inputStyle = { border: "1px solid var(--border)", backgroundColor: "white" };

  return (
    <div className="max-w-2xl mx-auto px-8 py-20">
      <p className="text-[10px] tracking-[0.25em] font-light mb-4" style={{ color: "var(--muted)" }}>
        {c.section}
      </p>
      <h1 className="text-3xl font-light tracking-widest mb-6">{c.heading}</h1>
      <p className="text-sm font-light leading-loose mb-16" style={{ lineHeight: "2", color: "var(--muted)" }}>
        {c.intro}
      </p>

      <form action="https://formspree.io/f/xkoyndko" method="POST" className="space-y-8">
        <input type="hidden" name="_next" value={`https://michikotamada.com/${locale}/contact/thanks`} />
        <div>
          <label className="block text-[10px] tracking-[0.2em] font-light mb-2.5" style={{ color: "var(--muted)" }}>
            {c.name} <span className="text-red-400">*</span>
          </label>
          <input type="text" name="name" required className={inputClass} style={inputStyle} />
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.2em] font-light mb-2.5" style={{ color: "var(--muted)" }}>
            {c.org}
          </label>
          <input type="text" name="organization" className={inputClass} style={inputStyle} />
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.2em] font-light mb-2.5" style={{ color: "var(--muted)" }}>
            {c.email} <span className="text-red-400">*</span>
          </label>
          <input type="email" name="email" required className={inputClass} style={inputStyle} />
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.2em] font-light mb-2.5" style={{ color: "var(--muted)" }}>
            {c.category} <span className="text-red-400">*</span>
          </label>
          <select name="category" required className={inputClass + " appearance-none"} style={inputStyle}>
            <option value="">{c.categoryPlaceholder}</option>
            {c.categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.2em] font-light mb-2.5" style={{ color: "var(--muted)" }}>
            {c.message} <span className="text-red-400">*</span>
          </label>
          <textarea name="message" required rows={7} placeholder={c.messagePlaceholder}
            className={inputClass + " resize-y"} style={inputStyle} />
        </div>

        <p className="text-xs font-light leading-loose px-5 py-4 border-l-2"
          style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent-light)", color: "var(--muted)", lineHeight: "1.9" }}>
          {c.privacy}
        </p>

        <button type="submit"
          className="w-full py-4 text-xs tracking-[0.2em] font-light text-white transition-opacity duration-200 hover:opacity-80"
          style={{ backgroundColor: "var(--accent)" }}>
          {c.submit}
        </button>
      </form>
    </div>
  );
}
