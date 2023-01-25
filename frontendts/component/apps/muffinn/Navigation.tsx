import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styled from "styled-components";

type NavControlProps = {
    name: string,
    href: string
}


const StyledLink = styled(Link)`
color: #fff;

text-decoration: none;

font-weight: 700;

width: 50px;
height: fit-content;

text-align: center;

transition: 0.1s ease-in-out;

border-radius: 5px;

padding: 5px;

@media (hover: hover) {
    &:hover {
        color: #E6A52E;
    
        transition: 0.1s ease-in-out;
    }
}

@media (hover: none) {
    &.active {
        color: #E6A52E;

        background-color: #644633;
        box-shadow: inset 2px 2px 1px 1px #000;

        transition: 0.1s ease-in-out;
    }
}

&:active {
    background-color: #644633;
    box-shadow: inset 2px 2px 1px 1px #000;

    transition: 0.1s ease-in-out;
}
`


function NavControl(prop: {name: string, href: string, active: boolean, onClick: Function}) {
    return <>
        <StyledLink href={"/apps/muffinn/"+prop.href} className={prop.active ? "active" : ""} onClick={()=>prop.onClick()}>
            {prop.name}
        </StyledLink>
        <style jsx>{`
            Link {
                color: #fff;

                text-decoration: none;
            }
        `}</style>
    </>
}


let navItems: Array<NavControlProps> = [
    {
        name: "Home",
        href: ""
    },
    {
        name: "About",
        href: "about"
    },
    {
        name: "Gallery",
        href: "gallery"
    }
]


export default function Navigation() {
    let [navVisible, setNavVisibility] = useState<boolean>(false);
    let [selectedIndex, setIndex] = useState<number>(0);

    return <>
        <div className="less-width-only nav-icon nav-visibility-controller" onClick={() => {setNavVisibility(!navVisible)}}>
            <Image src="/images/apps/muffinn/muffin.transp.svg" alt="Open" width={35} height={35} style={{"display": navVisible ? "none" : "block"}} />
            <Image src="/images/apps/muffinn/close.svg" alt="Close" width={35} height={35} style={{"display": navVisible ? "block" : "none"}} />
        </div>
        <nav className={navVisible ? "visible" : ""}>
            {/*
                In more widths, nav always visible
                In less widths, nav only visible when navVisible is true
            */}
            <div className="nav-icon">
                <Image src="/images/apps/muffinn/muffin.min.svg" alt="Muffinn" width={35} height={35} />
            </div>
            <div className="nav-controls">
                {
                    navItems.map((item, index) => <NavControl key={item.href} name={item.name} href={item.href} active={index === selectedIndex} onClick={()=>setIndex(index)} />)
                }
            </div>
        </nav>

        <style jsx>{`
            .less-width-only {
                display: none;
            }

            nav {
                background-color: #745643;

                box-sizing: border-box;

                padding: 5px 20px;

                position: sticky;
                top: 15px;

                border-radius: 15px;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            div.nav-icon {
                background-color: #E6A52E;

                border-radius: 10px;

                width: 35px;
                height: 35px;
            }

            nav div.nav-controls {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                position: relative;

                background: transparent;

                gap: 10px;
            }

            @media (max-width: 600px) {
                .less-width-only {
                    display: block;
                }

                .nav-visibility-controller {
                    position: fixed;
                    top: 15px;
                    left: 85vw;

                    background-color: #D6951E !important;

                    padding: 3px;
                }

                nav {
                    display: none;

                    background-color: #745643;

                    position: fixed;
                    top: 15px;

                    width: 75vw;

                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                nav.visible {
                    display: flex;
                }

                nav div.nav-icon {
                    display: none;
                }
            }
        `}</style>
    </>
}