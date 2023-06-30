import './globals.css'

import {Poppins, Pacifico} from 'next/font/google'

import Layout from './components/Layout'

import Head from 'next/head'

import { Footer, Navbar } from './components'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})



export const metadata = {
  title: 'E-commerce',
  description: 'best ecommerse out there',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <div className=''>
          <Head>
            <title>jen's store</title>
          </Head>

          <header>
            <Navbar />
          </header>

          <main className='main-container layout'>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
}
