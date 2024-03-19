import type { Metadata } from 'next'
import { Hanken_Grotesk, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

import { Navbar } from '@/components/navbar'
import { AnnouncementBar } from '@/components/announcement'
import { Separator } from '@/components/ui/separator'

const font = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
          themes={['light', 'dark', 'blue']}
        >
          <div className='bg-secondary'>
            <AnnouncementBar/>
            <Separator className='bg-secondary-foreground opacity-50 shadow-lg'/>
    <Navbar/>
    </div>
    
         <main className='min-h-screen flex flex-col'> {children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
