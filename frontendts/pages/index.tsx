import styles from "../styles/index.module.scss"
import {CSSProperties} from "react";


type Lang = {
  title: string,
  subtitle: string
}


function LangMap(lang: string): Lang {
  switch (lang) {

    case "en":
      return {
        "title": "Hello!",
        "subtitle": "I'm SSerVe, A Student-like Full Stack Web Developer."
      }

    case "kr":
      return {
        "title": "안녕하세요!",
        "subtitle": "학생이자 풀스택 웹 개발자인 서브입니다."
      }

    default:
      return {
        "title": "Hello!",
        "subtitle": "I'm SSerVe, A Student-like Full Stack Web Developer."
      }
  }
}


export default function index(props: {lang: string}) {
  let langs = LangMap(props.lang)

  return <main className={styles.container}>
    <section className={styles.hero}>
      <h1>{langs.title}</h1>
      <p>{langs.subtitle}</p>
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