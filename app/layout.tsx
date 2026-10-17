import { Analytics } from '@vercel/analytics/next'
import { cookies } from 'next/headers'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kim Minh Đài VN | Tự động hóa & Vật tư Công nghiệp',
  description: 'Giải pháp tự động hóa, thiết bị và vật tư kỹ thuật công nghiệp cho doanh nghiệp tại Việt Nam.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Await trực tiếp hàm cookies() để sửa lỗi
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('site_language');
  const language = langCookie?.value === 'en' ? 'en' : 'vi';

  return (
    <html lang={language}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}