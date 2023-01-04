import Link from 'next/link'
import {NextRouter, useRouter} from 'next/router'
import styles from "../styles/navigation.module.scss"
import Image from 'next/image'

type NavigationProps = {
    href: string,
    img: string,
    alt: string
}

function makeLink(router: NextRouter, {href, img, alt}: NavigationProps) {
    return <Link href={"/"+href} className={ `${router.asPath === '/'+href ? styles.active : ""}` }>
        <div>
            <Image src={"/images/NavigationIcons/"+img} alt={alt} width={30} height={30} />
            <span>{alt}</span>
        </div>
    </Link>
}

function LinkMap(): Array<NavigationProps> {
    return [
        {
            href: "",
            img: "home.svg",
            alt: "Home"
        },
        {
            href: "about",
            img: "info.svg",
            alt: "About"
        },
        {
            href: "apps",
            img: "apps.svg",
            alt: "Apps"
        },
        {
            href: "contact",
            img: "contact.svg",
            alt: "Contact"
        },
    ]
}

export default function Navigation() {
    const router = useRouter()

    return <div className={styles.nav_container}>
        <nav>
            <ul>
                {LinkMap().map((link) => <li key={link.href}>{makeLink(router, link)}</li>)}
            </ul>
        </nav>
    </div>
}