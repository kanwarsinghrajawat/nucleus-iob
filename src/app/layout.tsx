import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nucleus IOB - The Internet of Blockchains",
    template: "%s | Nucleus IOB",
  },
  description:
    "Connecting AI & Blockchain for a Harmonized Future. The intelligent heart of cross-chain interoperability powered by AIIP & PoHG. Token: Shiloh (SHILOH).",
  keywords: [
    "blockchain",
    "AI",
    "interoperability",
    "cross-chain",
    "AIIP",
    "PoHG",
    "Shiloh",
    "cryptocurrency",
    "DeFi",
    "Web3",
    "Internet of Blockchains",
    "Nucleus IOB",
  ],
  authors: [{ name: "Nucleus IOB Team" }],
  creator: "Nucleus IOB",
  publisher: "Nucleus IOB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nucleusiob.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nucleusiob.com",
    title: "Nucleus IOB - The Internet of Blockchains",
    description:
      "Connecting AI & Blockchain for a Harmonized Future. The intelligent heart of cross-chain interoperability powered by AIIP & PoHG.",
    siteName: "Nucleus IOB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nucleus IOB - The Internet of Blockchains",
    description:
      "Connecting AI & Blockchain for a Harmonized Future. The intelligent heart of cross-chain interoperability powered by AIIP & PoHG.",
    creator: "@NucleusIOB",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${outfit.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
