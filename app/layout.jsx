import './globals.css'
import { Inter, Poppins } from 'next/font/google'

import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })

// const popins = Poppins({subsets: ['latin']})

export const metadata = {
  title: 'E-commerce',
  description: 'best ecommerse out there',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`inter.className layout`}><Layout>
        {children}
        </Layout></body>
    </html>
  )
}
