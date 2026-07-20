import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Magra } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const magra = Magra({
  subsets: ["latin"],
  variable: "--font-magra",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pedalandco.pk"),
  title: "Pedal&Co — Islamabad's Home for Padel, Racing & Great Coffee",
  description:
    "Pakistan's newest premium sports destination. Professional padel courts, racing simulators, a specialty café, and a community built around great play. Book your court in Islamabad.",
  keywords: [
    "padel Islamabad",
    "padel courts Pakistan",
    "racing simulator Islamabad",
    "sports club Islamabad",
    "Pedal&Co",
  ],
  openGraph: {
    title: "Pedal&Co — Islamabad's Home for Padel, Racing & Great Coffee",
    description:
      "A premium social sports club in Islamabad — padel courts, racing simulators, café, and community.",
    type: "website",
    locale: "en_PK",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${magra.variable}`}>
      <body>{children}</body>
    </html>
  );
}
