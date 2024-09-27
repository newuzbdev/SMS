import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import ThemeDataProvider from "@/app/context/theme-data-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management Dashboard System",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>{children}</ThemeDataProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
