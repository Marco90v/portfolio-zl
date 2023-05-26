import Gallery from "@/components/Gallery";

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div className="h-screen overflow-auto lg:col-span-5 flex flex-wrap gap-10 justify-center items-center">
            <Gallery />
            {children}
        </div>
    )
}