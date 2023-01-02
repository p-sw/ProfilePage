import Link from 'next/link'
import styles from '../styles/navigation.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

function makeLink(router, {href, img, alt}) {
    return <Link href={href} className={ router.pathname === href ? styles.active : "" }>
        <div>
            <Image src={"/images/NavigationIcons/"+img} alt={alt} width={30} height={30} />
            <span>{alt}</span>
        </div>
    </Link>
}

function LinkMap() {
    return [
        {
            href: "/",
            img: "home.svg",
            alt: "Home"
        },
        {
            href: "/apps",
            img: "apps.svg",
            alt: "Apps"
        },
        {
            href: "/about",
            img: "info.svg",
            alt: "About"
        },
        {
            href: "/contact",
            img: "contact.svg",
            alt: "Contact"
        },
        {
            href: "/conf",
            img: "conf.svg",
            alt: "Settings"
        }
    ]
}

export default function Navigation() {
    const router = useRouter();

    const links = LinkMap();

    return <div className={styles.nav_container}>
        <nav>
            <ul>
                {links.map(link => <li key={link.href}>{makeLink(router, link)}</li>)}
            </ul>
        </nav>
    </div>
}