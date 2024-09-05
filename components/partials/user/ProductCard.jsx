"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import SepeteEkleButton from "./SepeteEkle"


export default function ProductCard({ product, alisVeris }) {
    const router = useRouter()

    return (
        <div onClick={() => {
            router.push(`/urunler/${product.slug}`)
            }} 
            className="col-span-6 sm:col-span-6 md:col-span-4  xl:col-span-3 mb-3 mt-2 mx-auto text-white bg-gradient-to-t from-cyan-500 to-blue-500 py-3 px-2 w-11/12 rounded-md  shadow-xl flex gap-5 flex-col text-center justify-center items-center cursor-pointer">
            <h1 className=" bg-slate-300/30 rounded-md py-1 px-4 font-bold text-xl sm:text-lg xl:text-xl">{product.title}</h1>
            <Image src={product.thumbnail} width={200} height={200} alt={product.title} priority/>
            {alisVeris && <p className="bg-slate-800/20 rounded-md py-2 px-4 mx-6 text-white text-base shadow-lg">{product.description}</p>}
            <div className="bg-slate-100/30 rounded-md py-2 px-4 text-white font-light ">
            {product.price}<span className="ms-2">₺</span>
            </div>
            {alisVeris && <SepeteEkleButton/>}
            <div className="flex justify-start w-full"><p className="bg-slate-500/50 ring-1 ring-white/40 text-white rounded-xl px-2 font-extralight">{product.product_categories.name}</p></div>
        </div>
    ) 
}