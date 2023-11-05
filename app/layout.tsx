import type { Metadata } from "next";
import { ThemeProvider } from "./ThemeProvider";
import { DarkModeButton } from "@/components";
// import { switchThemeDuration } from "./constants";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthony's portfolio",
  description: "A motivated developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} transition-bg bg-slate-50 dark:bg-slate-900 dark:text-slate-400`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <DarkModeButton />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
