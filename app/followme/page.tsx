"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import instagram from "../../assets/instagram-alt-logo-240.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
function Page(){
    const pathname = usePathname();

    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={pathname}
            className="baseContainerSection extraContainerSection flex-col bg-gradient-radial from-pink-700 via-pink-950 to-black text-center text-2xl font-black lg:flex-row">
            <h2 className="lg:absolute top-20 text-white text-4xl">Follow me on my social networks.</h2>
            <Link href="https://www.instagram.com/artonsang/" target="_blank" className="p-4 rounded-2xl transition-[color, background] duration-500 hover:text-white hover:bg-white/10">
                <Image
                    src={instagram}
                    alt="@artosang"
                />
                <p>@artosang</p>
            </Link>
            <Link href="https://www.instagram.com/zoimarlezama/" target="_blank" className="p-4 rounded-2xl transition-[color, background] duration-500 hover:text-white hover:bg-white/10">
                <Image
                    src={instagram}
                    alt="@zoimarlezama"
                />
                <p>@zoimarlezama</p>
            </Link>
        </motion.section>
    )
}
export default Page;