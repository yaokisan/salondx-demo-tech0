import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Salon DX - 異次元の生産性を持つ経営エンジン",
  description: "3つの革新的DXアプリケーションと未来へつながる失敗の物語。Tech0成果発表会ポスターセッション",
  keywords: "DX, アプリ開発, Tech0, 経営システム, 生産性",
  authors: [{ name: "Salon DX Team" }],
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
