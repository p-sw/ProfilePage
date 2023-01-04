import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import {useRouter} from "next/router";

import Navigation from "../component/Navigation"

export default function App({ Component, pageProps }: AppProps) {

  let router = useRouter()
  if (router.query.hasOwnProperty("lang")) {
    pageProps.lang = router.query.lang
  }

  return <>
    <Head>
      <title>SSerVe</title>
      <meta charSet="utf-8" />
    </Head>
    <Navigation />
    <Component {...pageProps} />
  </>
}
