"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"


export default function ProductCard({ product }) {
    const router = useRouter()

    return (
        <div onClick={() => {
            router.push(`/urunler/${product.id}`)
            }} 
            className="col-span-6 sm:col-span-6 md:col-span-4  xl:col-span-3 mb-3 mt-2 mx-auto text-white bg-gradient-to-t from-cyan-500 to-blue-500 py-3 px-2 w-11/12 rounded-md  shadow-xl flex gap-5 flex-col text-center justify-center items-center cursor-pointer">
            <h1 className=" bg-slate-300/30 rounded-md py-2 px-4 font-bold text-xs sm:text-lg xl:text-xl">{product.title}</h1>
            <Image src={product.thumbnail} width={200} height={200} alt={product.category} priority/>
            <div className="bg-slate-100/30 rounded-md py-2 px-4 text-white font-light hover:text-white hover:border-indigo-500 hover:border-2">
            <span className="me-2">$</span>{product.price}
            </div>
        </div>
    ) 
}