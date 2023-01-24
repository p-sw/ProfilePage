import type { AppProps } from 'next/app'

import Head from 'next/head'

import Navigation from "../component/Navigation"

export default function DefaultLayout(props: { children: React.ReactNode }) {
    return <>
    <Head>
      <title>SSerVe</title>
      <meta charSet="utf-8" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Navigation />
    {props.children}
  </>
}

export function getLayout(page: React.ReactNode) {
    return <DefaultLayout>{page}</DefaultLayout>
}