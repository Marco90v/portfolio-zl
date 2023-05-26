import Image from "next/image";

import uno from "../../assets/gallery/32156049_384115815427318_6353179816824406016_n.jpg";
import dos from "../../assets/gallery/43585512_275824769703217_1420100916862563941_n.jpg";
import tres from "../../assets/gallery/46542418_576770409430726_4747645904355545213_n.jpg";
import cuatro from "../../assets/gallery/47184996_299803423997617_1561735088256652199_n.jpg";

const art = [
    {link:uno},
    {link:dos},
    {link:tres},
    {link:cuatro},
];

function Page(){
    return(
        <div className="h-screen overflow-auto relative lg:col-span-5">
            {
                art.map((item,idx)=>{
                    return <Image
                        key={idx}
                        className=""
                        src={item.link}
                        width={500}
                        height={500}
                        alt="cover"
                    />
                })
            }
        </div>
    )
}
export default Page;