import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="ja">
      <body style={{ margin: 0, backgroundColor: "#faf7f2", fontFamily: "sans-serif", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#7a7570", marginBottom: "1rem" }}>404</p>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 300, letterSpacing: "0.1em", marginBottom: "1rem", color: "#1c1c1c" }}>
            ページが見つかりません
          </h1>
          <p style={{ fontSize: "0.8rem", color: "#7a7570", marginBottom: "2rem" }}>
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <Link href="/ja" style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#5b7a50", textDecoration: "none" }}>
            トップページへ戻る
          </Link>
        </div>
      </body>
    </html>
  );
}
