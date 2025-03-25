import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/fonts.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import StarsCanvas from '@/components/StarBackground'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen relative`}>
        <StarsCanvas
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
        />
        <NavBar />
        <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
        <SpeedInsights/>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
