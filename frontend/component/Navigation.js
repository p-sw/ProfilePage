import Link from 'next/link'
import styles from '../styles/navigation.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

function makeLink(router, {href, img, alt}) {
    return <Link href={href} className={ router.pathname === href ? styles.active : "" }>
        <Image src={img} alt={alt} width={30} height={30} />
        <span>{alt}</span>
    </Link>
}

function LinkMap() {
    return [
        {
            href: "/",
            img: "/images/home.svg",
            alt: "Home"
        },
        {
            href: "/apps",
            img: "/images/apps.svg",
            alt: "Apps"
        },
        {
            href: "/about",
            img: "/images/info.svg",
            alt: "About"
        },
        {
            href: "/contact",
            img: "/images/contact.svg",
            alt: "Contact"
        }
    ]
}

function FindLinkIndex(router) {
    return LinkMap().findIndex(link => link.href === router.pathname)
}

export default function Navigation() {
    const router = useRouter();

    const links = LinkMap();

    return <div className={styles.nav_container}>
        <nav>
            <ul>
                {links.map(link => <li key={link.href}>{makeLink(router, link)}</li>)}
            </ul>
            <div className={styles.indicator} data-goto={FindLinkIndex(router)}></div>
        </nav>
    </div>
}