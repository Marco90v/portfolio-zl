import Image from "next/image";
import instagram from "../../assets/instagram-alt-logo-240.png"
import Link from "next/link";
function Page(){
    return(
        <div className="h-screen overflow-auto py-8 lg:col-span-5 flex flex-col flex-wrap gap-10 justify-center items-center bg-gradient-radial from-pink-700 via-pink-950 to-black text-center text-2xl font-black lg:flex-row">
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
        </div>
    )
}
export default Page;