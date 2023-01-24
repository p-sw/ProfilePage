import styles from "../styles/about.module.scss"

import SkillBox from "../component/SkillBox"

import Image from "next/image"
import { getLayout } from "../layouts/DefaultLayout"

export default function About() {
    return <main className={styles.container}>
        <section className={styles.charbox}>
            <article className={styles.profilepic}>
                <Image src="/images/prpic.png" alt="Profile Picture" width={2048} height={2048} />
            </article>
            <article className={styles.charinfo}>
                <h1>서브</h1>
                <p>한국의 고등학생 & 풀스택 웹 개발자</p>
            </article>
        </section>
        <section className={styles.skills}>
            <h1>Skills</h1>
            <article className={`${styles.skill}`}>
                <h2>Frontend</h2>
                <div className={styles.skillbox}>
                    <SkillBox
                        skill="VueJS"
                        basecolor={{r: 0, g: 193, b: 128}}
                        textcolor={{r: 255, g: 255, b: 255}}
                        img={"vuejs.png"}
                    />
                    <SkillBox
                        skill="ReactJS"
                        basecolor={{r: 34, g: 34, b: 34}}
                        textcolor={{r: 97, g: 218, b: 251}}
                        img={"react.png"}
                    />
                    <SkillBox
                        skill="NextJS"
                        basecolor={{r: 240, g: 240, b: 240}}
                        textcolor={{r: 0, g: 0, b: 0}}
                        img={"nextjs.png"}
                    />
                </div>
            </article>
            <article className={`${styles.skill}`}>
                <h2>Backend</h2>
                <div className={styles.skillbox}>
                    <SkillBox
                        skill="Django"
                        basecolor={{r: 9, g: 46, b: 32}}
                        textcolor={{r: 255, g: 255, b: 255}}
                        img={"django.png"}
                    />
                    <SkillBox
                        skill="FastAPI"
                        basecolor={{r: 240, g: 240, b: 240}}
                        textcolor={{r: 1, g: 152, b: 137}}
                        img={"fastapi.png"}
                    />
                    <SkillBox
                        skill="Flask"
                        basecolor={{r: 240, g: 240, b: 240}}
                        textcolor={{r: 0, g: 0, b: 0}}
                        img={"flask.png"}
                    />
                </div>
            </article>
        </section>
    </main>
}

About.getLayout = getLayout