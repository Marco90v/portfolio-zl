'use client'
import Image from "next/image";
import iconSend from "../../assets/mail-send-regular-24.png";
import iconSuccess from "../../assets/check-circle-solid-24.png";
import iconError from "../../assets/error-circle-solid-24.png";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_gvdn1yc";
const TEMPLATE_ID = "template_ggqg58v";
const PUBLIC_KEY = "cuaNdUhdGOg7KbRC3";

const initialformContact = {
    fullName:"",
    email:"",
    subject:"",
    message:"",
}
const initialAlert = {
    msg:"",
    type:"",
    icon:iconSuccess,
}

function Page(){
    const [formContact, setFormContact] = useState(initialformContact);
    const [disabled, setDisabled] = useState(false);
    const [alert, setAlert] = useState(initialAlert);

    const styleAlert = alert.type === "success" ? "bg-green-700 opacity-100" : 
        alert.type === "error" ? "bg-red-700 opacity-100" :
            "opacity-0";

    const handlerInput = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormContact((item)=>{
            return {
                ...item,
                [key]:value
            }
        })
    }

    const handlerSubmit = (e:any) => {
        e.preventDefault();
        setDisabled(true);
        setAlert(initialAlert);
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formContact, PUBLIC_KEY).then(()=>{
            const msgAlert = {msg:"Message sent successfully.", type:"success", icon:iconSuccess};
            setAlert(msgAlert);
            setDisabled(false);
            setFormContact(initialformContact);
        }).catch(()=>{
            const msgAlert = {msg:"The message could not be sent, please try again.", type:"error", icon:iconError};
            setAlert(msgAlert);
            setDisabled(false);
        });
    }
    return(
        <section className="baseContainerSection extraContainerSection bg-gradient-to-br from-black via-pink-950 to-pink-900 from-20% via-80%">
            <h2 className="lg:absolute top-20 text-white text-4xl font-black" >Contact me</h2>
            <form onSubmit={handlerSubmit} className="p-2 w-[40rem] y-[25rem] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <input disabled={disabled} onChange={handlerInput} value={formContact.fullName} required name="fullName" id="fullName" type="text" placeholder="Full Name" className="baseInputsContact" />
                <input disabled={disabled} onChange={handlerInput} value={formContact.email} required name="email" id="email" type="email" placeholder="Email" className="baseInputsContact" />
                <input disabled={disabled} onChange={handlerInput} value={formContact.subject} required name="subject" id="subject" type="text" placeholder="Subject" className="lg:col-span-2 baseInputsContact" />
                <textarea disabled={disabled} onChange={handlerInput} value={formContact.message} required name="message" id="message" cols={30} rows={10} placeholder="Message" className="lg:col-span-2 baseInputsContact" />
                <span className={`lg:col-span-2 p-2 rounded-lg text-white font-black flex gap gap-x-4 items-center transition-[opacity] ${styleAlert}`} >
                    <Image 
                        src={ alert.icon }
                        alt="icon"
                    />
                    {alert.msg}
                </span>
                <button disabled={disabled} type="submit" className="lg:col-start-2 lg:ml-[8rem] bg-pink-600 rounded-lg font-black sendButtom transition-[background, shadow] duration-500 hover:bg-pink-400 hover:shadow-md hover:shadow-black disabled:bg-gray-700" >
                    Send Message
                    <Image
                        src={iconSend}
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