"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import cover from "../assets/cover.jpg"
import { usePathname } from "next/navigation";

function Page(){
    const pathname = usePathname();
    const myLoader = ({ src, width, quality }:any) => {
        return `http://localhost:3000/${src}?w=${width}&q=${ quality || 50 }`;
    };
    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={pathname}
            className="baseContainerSection lg:col-span-5">
            <Image
                className="w-full h-full object-cover"
                src={cover}
                loader={myLoader}
                alt="cover"
                quality={75}
            />
            <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-black text-pink-600 flex flex-col justify-center items-center gap-y-40">
                <h2 className="text-8xl lg:text-9xl font-black text-center">Zoimar lezama</h2>
                <p className="w-[90%] text-2xl lg:text-4xl font-black text-center text-white lg:text-right">Illustrator at heart, a medical surgeon by profession</p>
            </div>
        </motion.section>
    )
}
export default Page;