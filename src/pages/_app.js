import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='bg-light w-full min-h-screen '>
    <Navbar/>
    <Component {...pageProps} />
    </main>
    </>
  )
}
