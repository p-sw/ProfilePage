import styles from "../styles/index.module.scss"
import {CSSProperties} from "react";


export default function Index() {
  return <main className={styles.container}>
    <section className={styles.hero}>
      <h1>안녕하세요!</h1>
      <p>학생이자 풀 스택 웹 개발자 서브입니다.</p>
    </section>
    <section className={styles.cube}>
      <div>
        <div className={styles.top}></div>
        <div>
          <div style={{"--i": 0} as CSSProperties}></div>
          <div style={{"--i": 1} as CSSProperties}></div>
          <div style={{"--i": 2} as CSSProperties}></div>
          <div style={{"--i": 3} as CSSProperties}></div>
        </div>
      </div>
    </section>
  </main>
}