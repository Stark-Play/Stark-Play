'use client'
import { ThemeProvider } from 'next-themes'
import { Header } from "~~/components/Header";
import { Footer } from "~~/components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col bg-main px-8">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer/>
          </div>
        </ThemeProvider>
    </body>
  </html>
  )
}
