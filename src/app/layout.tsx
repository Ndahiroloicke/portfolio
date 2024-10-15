import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

// Import local fonts

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}