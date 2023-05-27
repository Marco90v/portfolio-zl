import { art } from "@/data";
import Image from "next/image";
import Link from "next/link";

function Gallery(){
    return(
        <div className="baseContainerSection extraContainerSection bg-gradient-radial from-white to-pink-200 from-80%">
            {
                art.map((item,idx)=>{
                    return (
                        <Link key={idx} href={`gallery/${idx.toString()}`}>
                            <Image
                                className="w-80 h-80 object-cover rounded-2xl shadow-md shadow-pink-400 bg-pink-400 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-400 hover:rounded-none"
                                src={item.link}
                                width={500}
                                height={500}
                                alt="cover"
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default Gallery;