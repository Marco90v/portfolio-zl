'use client'
import Image from "next/image";
import send from "../../assets/mail-send-regular-24.png";

function Page(){
    const handlerSubmit = (e:any) => {
        e.preventDefault();
    }
    return(
        <section className="baseContainerSection extraContainerSection bg-gradient-to-br from-black via-pink-950 to-pink-900 from-20% via-80%">
            <h2 className="lg:absolute top-20 text-white text-4xl font-black" >Contact me</h2>
            <form onSubmit={handlerSubmit} className="p-2 w-[40rem] y-[25rem] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <input required name="name" id="name" type="text" placeholder="Full Name" className="baseInputsContact" />
                <input required name="email" id="email" type="email" placeholder="Email" className="baseInputsContact" />
                <input required name="subject" id="subject" type="text" placeholder="Subject" className="lg:col-span-2 baseInputsContact" />
                <textarea required name="msg" id="msg" cols={30} rows={10} placeholder="Message" className="lg:col-span-2 baseInputsContact" />
                <button type="submit" className="lg:col-start-2 lg:ml-[8rem] bg-pink-600 rounded-lg font-black sendButtom transition-[background, shadow] duration-500 hover:bg-pink-400 hover:shadow-md hover:shadow-black" >
                    Send Message
                    <Image
                        src={send}
                        alt="iconSend"
                        width={24}
                        height={24}
                    />
                </button>
            </form>
        </section>
    )
}
export default Page;