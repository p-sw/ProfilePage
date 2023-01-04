import styles from "../styles/skillbox.module.scss"
import Image from "next/image"
import {CSSProperties} from "react";

type Color = {
    r: number,
    g: number,
    b: number
}

export default function SkillBox(
    props: {
        skill: string,
        basecolor?: Color,
        textcolor?: Color,
        img?: string}) {
    return <div className={styles.skillbox} style={
        props.basecolor ?
        {
            '--r': props.basecolor.r.toString(),
            '--g': props.basecolor.g.toString(),
            '--b': props.basecolor.b.toString()
        } as CSSProperties : {}
    } data-def={props.basecolor ? "false" : "true"}>
        {props.img ? <Image src={"/images/skills/"+props.img} alt={props.skill} width={512} height={512} /> : <></>}
        <span className={props.img ? styles.yesimg : styles.noimg} style={
            props.textcolor ?
            {
                '--r': props.textcolor.r.toString(),
                '--g': props.textcolor.g.toString(),
                '--b': props.textcolor.b.toString()
            } as CSSProperties : {}
        } data-def={props.textcolor ? "false" : "true"}>
            {props.skill}
        </span>
    </div>
}