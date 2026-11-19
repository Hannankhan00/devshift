import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import ErrorBoundary from "./components/error-boundary";
import { COMPANY } from "@/lib/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Technoad | Software Development House & Digital Product Studio",
  description: "Technoad is an agile software development house. We build high-performance web platforms, custom cloud applications, and digital products with clean architecture.",
  keywords: "software house, web development, cloud software engineering, digital products, custom software, enterprise applications",
  authors: [{ name: "Technoad Team" }],
  openGraph: {
    title: "Technoad | Software Development House & Digital Product Studio",
    description: "High-performance web platforms, custom cloud software, and digital products built with clean architecture.",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  telephone: "+44 161 543 5503",
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    postalCode: COMPANY.address.postcode,
    addressCountry: COMPANY.address.country,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
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
