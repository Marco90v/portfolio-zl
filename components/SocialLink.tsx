import Image from "next/image";
import Link from "next/link";

function SocialLink({src, alt, href}:any){
    return(
        <Link href={href} target="_blank" className=" flex flex-col justify-center items-center p-4 rounded-2xl transition-[color, background] duration-500 hover:text-white hover:bg-white/10">
            <Image
                src={src}
                alt={alt}
                width={34}
                height={34}
                quality="25"
                priority={true}
            />
            <p>{alt}</p>
        </Link>
    )
}

export default SocialLink;