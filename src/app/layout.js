import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import ErrorBoundary from "./components/error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devshift | Digital Public Services & Software Engineering (UK Gov & Public Sector)",
  description: "Devshift delivers secure, user-centred digital services aligned with GDS Service Standards, Cyber Essentials Plus, and WCAG 2.2 AA accessibility for UK Government & the wider public sector.",
  keywords: "UK public sector, GDS service standard, Crown Commercial Service supplier, government software development, Cyber Essentials Plus, WCAG 2.2 accessibility, cloud transformation, NHS digital",
  authors: [{ name: "Devshift Public Sector Team" }],
  openGraph: {
    title: "Devshift | Digital Public Services & Software Engineering",
    description: "Secure, compliant, GDS-aligned digital solutions and software engineering for UK central government, local authorities, and the NHS.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        <ErrorBoundary>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          {process.env.NODE_ENV === 'production' && <SpeedInsights />}
        </ErrorBoundary>
      </body>
    </html>
  );
}
