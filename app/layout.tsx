import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "Muse.ai",
  description: "A nice music player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body style={{ height: "100vh" }}>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
}
