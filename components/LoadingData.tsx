import Image from "next/image";
import spinner from "../assets/loader-alt-regular-24.png";

function LoadingData() {
    return(
        <div className="flex gap-4">
            <p>Cargando</p>
            <Image
                className="animate-spin"
                src={spinner}
                width={24}
                height={24}
                alt="spinner"
                quality="25"
                priority={true}
            />
        </div>
    )
}

export default LoadingData;