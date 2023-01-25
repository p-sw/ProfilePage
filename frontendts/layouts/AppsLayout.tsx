import Head from 'next/head'

export default function AppsLayout(props: { children: React.ReactNode }) {
    return <>
    <Head>
      <meta charSet="utf-8" />
    </Head>
    {props.children}
    <style jsx global>{`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");

      html,body {
        margin: 0;
        padding: 0;
        width: 100vw;
        min-height: 100vh;
        font-family: "Pretendard Variable", Pretendard, -apple-system,
BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue",
"Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
"Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
"Segoe UI Symbol", sans-serif;
        font-size: 14px;
      }

      div#__next {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
}

export function getLayout(page: React.ReactNode) {
    return <AppsLayout>{page}</AppsLayout>
}