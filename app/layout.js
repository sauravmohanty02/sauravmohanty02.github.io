import "./globals.css";
import { Space_Grotesk, Fraunces } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "Saurav Mohanty | Portfolio",
  description:
    "Software engineer portfolio featuring experience in CI/CD automation, APIs, and machine learning.",
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}
