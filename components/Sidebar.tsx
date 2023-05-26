'use client'
import Link from "next/link"
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import avatar from "../assets/min-zoimar-lezama.jpg";
import arrow from "../assets/chevrons-right-regular-24.png";

const root:root[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Gallery",
        href: "/gallery",
    },
    {
        name: "Follow Me",
        href: "/followme",
    },
    {
        name: "Contact",
        href: "/contact",
    },
]

function Sidebar(){
    const pathname = usePathname();
    const [show, setShow] = useState(false);
    const nav = show ? "left-0" : "-left-60";
    const img = show ? "rotate-180" : "rotate-0"

    const handlerClick = () => setShow(!show);

    return(
        <nav className={`fixed z-10 h-screen ${nav} flex justify-center flex-col gap-5 bg-black text-pink-400 transition-all duration-700 w-60 lg:static lg:w-auto`}>
            <Image
                className="rounded-full w-52 mx-auto"
                src={avatar}
                alt="Zoimar Lezama"
            />
            <h1 className="text-center text-2xl font-black mb-10 text-pink-600">Tonsang</h1>
            <ul className="flex flex-col justify-center gap-10 w-full text-center text-lg mb-10">
                {
                    root.map((item:root)=>{
                        const isActive = pathname.startsWith(item.href) ? 'font-black text-pink-600 backActive' : '';
                        return <Link key={item.name} className={`relative back ${isActive}`} href={item.href}>{item.name}</Link>
                    })
                }
                
            </ul>
            <button
                className="absolute top-2 left-64 z-10 p-2 rounded-lg bg-pink-600 lg:hidden"
                onClick={handlerClick}
            >
                <Image
                    className={`min-w-min min-h-min max-w-min max-h-min transition-all duration-700 ${img}`}
                    src={arrow}
                    alt="arrow"
                />
            </button>
        </nav>
    )
}

export default Sidebar