import './globals.css'
import { Montserrat } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Growthunger - We evolve design with tech',
  description: 'Our craft speaks for itself.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}

