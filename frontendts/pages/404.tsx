import styles from "../styles/customerror.module.scss"

export default function Custom404() {
    return <main className={styles.container}>
        <h1>404</h1>
        <p>요청한 페이지를 찾을 수 없습니다.</p>
    </main>
}