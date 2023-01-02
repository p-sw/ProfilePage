import styles from '../styles/index.module.scss'

export default function index() {
    return <main className={styles.container}>
        <section className={styles.hero}>
            <h1>Hello!</h1>
            <p>Student-like Full Stack Web Developer</p>
        </section>
        <section className={styles.cube}>
            <div>
                <div className={styles.top}></div>
                <div>
                    <div style={{"--i": 0}}></div>
                    <div style={{"--i": 1}}></div>
                    <div style={{"--i": 2}}></div>
                    <div style={{"--i": 3}}></div>
                </div>
            </div>
        </section>
    </main>
}