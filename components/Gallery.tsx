import { art } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { URLBase, JSON, useFetch } from "@/hooks/useFetch";
import LoadingData from "./LoadingData";


function Gallery(){
    const [ data ] = useFetch(URLBase+JSON);
    return(
        <div className="w-full baseContainerSection extraContainerSection bg-gradient-radial from-white to-pink-200 from-80%">
            {
                !data ? <LoadingData />
                : data.gallery.map((item,idx)=>{
                    return (
                        <Link key={idx} href={`gallery/${idx.toString()}`}>
                            <Image
                                className="w-80 h-80 object-cover rounded-2xl shadow-md shadow-pink-400 bg-pink-400 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-400 hover:rounded-none"
                                src={URLBase+item.link}
                                width={320}
                                height={320}
                                quality="50"
                                alt="art"
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default Gallery;