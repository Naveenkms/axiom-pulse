import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import QueryClientProvider from "@/components/providers/query-client-provider";
import Header from "@/components/organisms/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Axiom Pulse",
  description: "The Gateway to DeFi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen w-full flex-col bg-background font-primary text-foreground antialiased`}
      >
        <QueryClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          {/* footer */}
        </QueryClientProvider>
      </body>
    </html>
  );
}
