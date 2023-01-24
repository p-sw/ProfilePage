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

    <style jsx global>{`
      @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");
      @import "./variables.module";

      html,body {
        margin: 0;
        padding: 0;
        background: $color-primary;
        width: 100vw;
        height: 100vh;
        font-family: $font-family;
        color: $color-invert-primary;
        font-size: 14px;
      }

      body > div:first-child {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
      }

      h1,h2,h3,h4,h5,h6,p,span {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </>
}

export function getLayout(page: React.ReactNode) {
    return <DefaultLayout>{page}</DefaultLayout>
}