import Navigation from "./Navigation"

import Head from "next/head"


export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <Head>
            <title>Muffinn</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apps/muffinn/fav/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/apps/muffinn/fav/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/apps/muffinn/fav/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <div className="main">
            <Navigation />
            <main>
                {
                    children
                }
            </main>
        </div>

        <style jsx global>{`
            body {
                background-color: #E6A52E;
            }

            main > h1:first-child {
                font-size: 2.5rem;

                width: 100%;
                text-align: center;
            }
        `}</style>

        <style jsx>{`
            .main {
                box-sizing: border-box;

                background-color: #fff;

                margin: 20% 5% 10%;
                padding: 15px 10px;
                border-radius: 15px;
            }

            main {
            }
        `}</style>
    </>
}