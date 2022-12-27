import '../styles/globals.scss'
import Head from 'next/head'

import Navigation from "../component/Navigation";

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>SSerVe</title>
      <meta charSet="utf-8" />
    </Head>
    <Navigation />
    <main>
      <Component {...pageProps} />
    </main>
  </>
}
