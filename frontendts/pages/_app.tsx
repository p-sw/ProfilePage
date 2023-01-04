import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import Head from 'next/head'

import Navigation from "../component/Navigation"

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>SSerVe</title>
      <meta charSet="utf-8" />
    </Head>
    <Navigation />
    <Component {...pageProps} />
  </>
}
