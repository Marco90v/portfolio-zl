'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { art } from "@/data";

function page({params}:any){
    const {id} = params;
    const img = art[id];
    return(
        <Link href="/gallery">
            <motion.div
                initial={{ y:-500, opacity: 0 }}
                animate={{ y:0,  opacity: 1 }}
                exit={{ y:-500, opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-black/90"
            >
                <Image
                    className="shadow-2xl shadow-pink-400 bg-pink-100"
                    src={img.link}
                    width={700}
                    height={700}
                    alt="art"
                />
            </motion.div>
        </Link>
    )
}

export default page