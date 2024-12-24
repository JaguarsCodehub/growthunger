import NotificationsList from '@/components/NotificationsList';
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Growthunger - A design agency with a twist',
  description: 'Design subscriptions for everyone. Pause or cancel anytime.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NotificationsList />
        {children}
      </body>
    </html>
  )
}

