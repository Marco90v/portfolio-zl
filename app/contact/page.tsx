'use client'
function Page(){
    const handlerSubmit = (e:any) => {
        e.preventDefault();
    }
    return(
        <div className="h-screen overflow-auto py-8 lg:col-span-5 flex flex-wrap gap-10 justify-center items-center bg-gradient-to-br from-black via-pink-950 to-pink-900 from-20% via-80% ">
            <form onSubmit={handlerSubmit} className="p-2 w-[40rem] y-[25rem] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <input required name="name" id="name" type="text" placeholder="Full Name" className="p-2 rounded-lg" />
                <input required name="email" id="email" type="text" placeholder="Email" className="p-2 rounded-lg" />
                <input required name="subject" id="subject" type="text" placeholder="Subject" className="lg:col-span-2 p-2 rounded-lg" />
                <textarea required name="msg" id="msg" cols={30} rows={10} placeholder="Message" className="lg:col-span-2 p-2 rounded-lg" />
                <button type="submit" className="lg:col-start-2 lg:ml-[8rem] bg-pink-600 p-2 rounded-lg font-black transition-[background] duration-500 hover:bg-pink-400" >Send Message</button>
            </form>
        </div>
    )
}
export default Page;