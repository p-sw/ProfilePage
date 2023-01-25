import { getLayout } from "../layouts/DefaultLayout"
import styles from "../styles/customerror.module.scss"

export default function Custom404() {
    return <main className={styles.container}>
        <h1>500</h1>
        <p>서버에서 요청을 처리할 수 없습니다.</p>
    </main>
}

Custom404.getLayout = getLayout