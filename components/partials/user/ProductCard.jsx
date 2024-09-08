"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import AddToBasket from "@/actions/basketActions"



export default function ProductCard({ product, alisVeris }) {
    const router = useRouter()
    const handleCardClick = (e) => {
        // Sepete ekle butonuna tıklanmadıysa detay sayfasına git
        if (e.target.tagName !== "BUTTON") {
            router.push(`/urunler/${product.slug}`);
        }
    };

    return (
        <div onClick={handleCardClick} 
            className="col-span-6 sm:col-span-6 md:col-span-4  xl:col-span-3 mb-3 mt-2 mx-auto text-white bg-gradient-to-t from-gray-300 to-gray-100 py-3 px-2 w-11/12 rounded-md  shadow-xl flex gap-5 flex-col text-center justify-center items-center cursor-pointer active:border active:border-gray-700">
            <h1 className={`text-black bg-slate-300/70 rounded-md min-h-16 flex justify-center items-center text-clip overflow-clip py-1 w-full font-bold ${alisVeris ? " text-xl" : " text-sm"} sm:text-lg xl:text-xl`}>{product.title}</h1>
            <Image src={product.thumbnail} width={200} height={200} alt={product.title} priority/>
            {alisVeris && <p className="bg-slate-800/20 rounded-md py-2 px-4 mx-6 text-white text-base shadow-lg">{product.description}</p>}
            <div className="bg-slate-300/60 border border-white/50 rounded-md py-2 px-4 text-gray-500 font-light ">
            {product.price}<span className="ms-2">₺</span>
            </div>

            {/* Sepete ekle butonu */}
            <form action={AddToBasket}>
                <button className="px-4 py-2 bg-slate-950/20  text-white text-xl font-bold rounded-xl cursor-pointer shadow-xl hover:bg-slate-200/20 hover:text-black">sepete ekle</button>

            </form>

            <div className="flex justify-start w-full"><p className="bg-slate-500/50 ring-1 ring-white/40 text-white rounded-xl px-2 font-extralight">{product.product_categories.name}</p></div>
        </div>
    ) 
}