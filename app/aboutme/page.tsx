"use client"
import { motion } from "framer-motion";
import instagram from "../../assets/instagram-alt-logo-24.png"
import { usePathname } from "next/navigation";
import SocialLink from "@/components/SocialLink";
function Page(){
    const pathname = usePathname();

    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={pathname}
            className="baseContainerSection extraContainerSection flex-col justify-start lg:justify-center bg-gradient-radial from-pink-700 via-pink-950 to-black text-2xl"
        >
            <div className="flex flex-col justify-center gap-y-8 p-8 text-white">
                <h2 className="text-center font-black text-6xl mb-8">About me</h2>
                <p>Hello, my name is <span className="font-black italic">Zoimar Lezama Corona</span>, I was born in 1991, I am a surgeon by profession, but with the heart of an illustrator.</p>
                <p>I love watercolor paintings, comic and anime-style drawings, and traditional drawings. Art is my best form of expression and enjoyment as a hobby.</p>
                <p>Always focused on success, I dedicate my free time to creating art pieces that make me improve, learning new techniques, and reinforcing the ones I already have.</p>
                <p>I hope you like my work, and if you want to see and keep up to date I invite you to follow me on my social networks.</p>
                <ul className="flex flex-row justify-center gap-8 text-black font-black">
                    <li>
                        <SocialLink src={instagram} alt="@artosang" href="https://www.instagram.com/artonsang/"/>
                    </li>
                    <li>
                        <SocialLink src={instagram} alt="@zoimarlezama" href="https://www.instagram.com/zoimarlezama/"/>
                    </li>
                </ul>
            </div>
        </motion.section>
    )
}
export default Page;