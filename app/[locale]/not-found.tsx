import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-32 text-center">
      <p className="text-[12px] tracking-[0.25em] font-light mb-8" style={{ color: "var(--muted)" }}>
        404
      </p>
      <h1 className="text-3xl font-light tracking-widest mb-6" style={{ color: "var(--ink)" }}>
        ページが見つかりません
      </h1>
      <p className="text-sm font-light mb-12" style={{ color: "var(--muted)" }}>
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link
        href="/ja"
        className="text-xs tracking-widest font-light px-8 py-3.5 transition-opacity duration-200 hover:opacity-70"
        style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
