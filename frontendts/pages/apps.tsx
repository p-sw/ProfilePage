import { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/apps.module.scss";
import { getLayout } from "../layouts/DefaultLayout";


interface ProjectInteraction {
    svgPath: string;
    text?: string;
    action: Function;
}


function Project(props: {index: number, title: string, description: string, interaction?: Array<ProjectInteraction>, current: number}) {
    return <article className={props.current === props.index ? styles.current : props.current > props.index ? styles.up : styles.down}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={styles.controls}>
            {
                props.interaction?.map((i, index) => {
                        return <button key={index} onClick={
                            () => {
                                i.action();
                            }
                        }>
                            <Image src={i.svgPath} alt={i.text ? i.text : ""} width={32} height={32} />
                            <span>{i.text}</span>
                        </button>
                    }
                )
            }
        </div>
    </article>
}

interface Project {
    title: string;
    description: string;
    interaction?: Array<ProjectInteraction>;
}

let projects: Array<Project> = [
    {
        title: "Certylang",
        description: `Certylang은 파이썬의 단점을 보완하기 위해 만들어진 프로그래밍 언어입니다. 
        기본적으로 파이썬과 비슷한 구조와 내장 함수, 
        키워드를 가지고 있지만 파이썬의 단점을 보완하기 위해 추가된 키워드와 문법이 있으며, 
        이를 통해 파이썬의 장점인 기존 라이브러리와 프레임워크들은 잃지 않으면서 단점을 최대한으로 메꿀 수 있도록 노력했습니다.`,
        interaction: [
            {
                svgPath: "/images/InteractionIcons/github.svg",
                text: "Github",
                action: () => {
                    Router.push("https://github.com/Project-Certylang/Certylang")
                }
            }
        ]
    },
    {
        title: "Portfolio",
        description: `보고있는 바로 지금 이 웹사이트입니다. 
        TypeScript와 Next.JS를 사용해 만들었으며, 
        아직 개발 중에 있습니다. 
        최종 목표는 할 수 있는 최대한의 기능들을 총 동원하여 만족할 수 있는 디자인을 만들면서, 최적화 또한 챙기는 것입니다.`,
        interaction: [
            {
                svgPath: "/images/InteractionIcons/github.svg",
                text: "Github",
                action: () => {
                    Router.push("https://github.com/sserve-kr/ProfilePage")
                }
            }
        ]
    }
]

export default function Apps() {
    let [project, setProject] = useState<number>(0);

    function increaseProjectIndex() {
        if (project < projects.length - 1) {
            setProject(project + 1);
        }
    }

    function decreaseProjectIndex() {
        if (project > 0) {
            setProject(project - 1);
        }
    }

    return <main className={styles.container}>
        <section className={styles.hero}>
            <h1>Projects</h1>
        </section>
        <button onClick={() => {decreaseProjectIndex()}} className={project <= 0 ? styles.limit : ""}>Prev</button>
        <section className={styles.projects}>
            {
                projects.map((p, index) => {
                    return <Project key={index} index={index} {...p} current={project} />
                })
            }
        </section>
        <button onClick={() => {increaseProjectIndex()}} className={project >= projects.length-1 ? styles.limit : ""}>Next</button>
    </main>
}


Apps.getLayout = getLayout