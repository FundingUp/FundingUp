import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/app/Navbar"
import Footer from "@/components/app/Footer"
import ScrollUpButton from "@/components/app/ScrollUpButton"

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "FundingUp",
  icons: {
    icon: '/images/Logo1.png'
  }
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
        <ScrollUpButton />
        <main className="pt-16 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
