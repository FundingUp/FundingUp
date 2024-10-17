import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FundingUp",
}

interface rootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: rootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  )
}
