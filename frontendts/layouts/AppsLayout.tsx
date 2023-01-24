import Head from 'next/head'

export default function AppsLayout(props: { children: React.ReactNode }) {
    return <>
    <Head>
      <meta charSet="utf-8" />
    </Head>
    {props.children}
  </>
}

export function getLayout(page: React.ReactNode) {
    return <AppsLayout>{page}</AppsLayout>
}