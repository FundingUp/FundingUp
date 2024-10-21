import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/app/Navbar"

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],  // add the weights you need
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "FundingUp",
}

interface rootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: rootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/banner.jpg" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
