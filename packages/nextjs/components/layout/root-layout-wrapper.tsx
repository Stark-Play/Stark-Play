"use client";
import { ThemeProvider } from "next-themes";
import { Header } from "~~/components/Header";
import { Footer } from "~~/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex relative min-h-screen flex-col bg-gradient-to-tr from-cyan-800 via-[#090979] to-[#7a0c00]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
