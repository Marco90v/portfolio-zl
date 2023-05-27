"use client"
import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import { usePathname } from "next/navigation";

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={pathname}
            className="h-screen overflow-auto lg:col-span-5 flex flex-wrap gap-10 justify-center items-center"
        >
            <Gallery />
            {children}
        </motion.section>
    )
}