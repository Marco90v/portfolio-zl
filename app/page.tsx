import Image from "next/image";
import cover from "../assets/cover.jpg"

function Page(){
    return(
        <div className="h-screen overflow-auto relative lg:col-span-5">
            <Image
                className="w-full h-full object-cover"
                src={cover}
                alt="cover"
            />
            <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-black text-pink-600 flex flex-col justify-center items-center gap-20">
                <h2 className="text-9xl font-black text-center">Zoimar lezama</h2>
                <p className="text-4xl font-black text-center">Illustrator at heart, a medical surgeon by profession</p>
            </div>
        </div>
    )
}
export default Page;