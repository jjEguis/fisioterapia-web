import Link from "next/link"
import Image from "next/image"
import logo from "@/public/img-1.webp"

export default function Navbar(){
    return(
        <nav className="fixed top-0 z-50 w-screen flex justify-between items-center py-5 px-20">
            <Image src={logo} alt="logo" width={80} height={80}  ></Image>
            <div className="bg-amber-50  rounded-full flex justify-center items-center gap-2 p-1.5">
                <Link className="bg-blue-400 rounded-full  py-2.5 px-4" 
                    href="#conocenos" >Conocenos</Link>
                <Link className="bg-blue-400 rounded-full  py-2.5 px-4" 
                    href="#conocenos" >Servicios</Link>
                <Link className="bg-blue-400 rounded-full  py-2.5 px-4"
                    href="#conocenos" >Contacto</Link>
            </div>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 w-40 rounded-full transition-colors">
                Agendar
            </button>
        </nav>
    )
}