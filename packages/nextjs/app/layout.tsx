import type { Metadata } from "next";
import { ScaffoldStarkAppWithProviders } from "~~/components/ScaffoldStarkAppWithProviders";
import "~~/styles/globals.css";
import RootLayoutWrapper from "~~/components/layout/root-layout-wrapper";
import { Providers } from "~~/components/layout/providers";

export const metadata: Metadata = {
  title: "StarkPlay",
  description: "Review and play games on StarkNet",
  icons: "/logo.ico",
};

const ScaffoldStarkApp = ({ children }: { children: React.ReactNode }) => {
  return (
    // biome-ignore lint/a11y/useHtmlLang: <explanation>
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <RootLayoutWrapper>
            <ScaffoldStarkAppWithProviders>
              {children}
            </ScaffoldStarkAppWithProviders>
          </RootLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
};

export default ScaffoldStarkApp;
