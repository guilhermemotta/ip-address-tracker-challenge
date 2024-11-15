import type { Metadata } from "next";
import { Rubik } from "next/font/google";

export const metadata: Metadata = {
  title: "IP Address Tracker",
  description: "IP Address Tracker description goes here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  );
}
