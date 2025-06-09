import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import appConfig from "@/app.config.json";

const neuethingSans = localFont({
  src: [
    {
      path: "./fonts/NeuethingSans-BoldUltraExpanded.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NeuethingSans-RegularUltraExpanded.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeuethingSans-SemiBoldUltraExpanded.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-neuething-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Talent Leaders Council",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neuethingSans.variable} ${poppins.variable}`}>
        {children}
        <Toaster richColors position="bottom-center" />
        <GoogleAnalytics gaId={appConfig.ga_id} />
      </body>
    </html>
  )
}
