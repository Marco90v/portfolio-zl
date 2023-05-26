// 'use client'
import { art } from "@/data";
import Image from "next/image";
import Link from "next/link";

function page({params}:any){
    const {id} = params;
    // console.log(id)
    const img = art[id];
    // console.log(img)
    return(
        <Link href="/gallery">
            <div
                className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-black/90"
                
            >
                <Image
                    className="shadow-2xl shadow-pink-400 bg-pink-100"
                    src={img.link}
                    width={700}
                    height={700}
                    alt="art"
                />
            </div>
        </Link>
    )
}

export default page