import Image from "next/image";
import Link from "next/link";
import LoadingData from "./LoadingData";
import { Suspense } from "react";
import { FileJSON, URLBase, getData } from "@/ultil/getData";

async function Cards({promise}:{promise:Promise<data>}){
    const {gallery} = await promise;
    return(
        gallery.map((item,idx)=>{
            const img = item.link.split("/")[1];
            return (
                <Link key={item.link} href={`gallery/${img}`}>
                    <Image
                        className="w-80 h-80 object-cover rounded-2xl shadow-md shadow-pink-400 bg-pink-400 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-400 hover:rounded-none"
                        src={URLBase+item.link}
                        width={320}
                        height={320}
                        quality="20"
                        alt="art"
                    />
                </Link>
            )
        })
    )
}

function Gallery(){
    const data = getData(URLBase+FileJSON);
    return(
        <div className="w-full baseContainerSection extraContainerSection bg-gradient-radial from-white to-pink-200 from-80%">
            <Suspense fallback={<LoadingData />}>
                {/* @ts-expect-error Async Server Component */}
                <Cards promise={data} />
            </Suspense>
        </div>
    )
}
export default Gallery;