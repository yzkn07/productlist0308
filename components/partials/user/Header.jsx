import Link from "next/link"
export default function UserHeader() {
    return (
        <header className="py-2 mb-2 shadow-lg rounded-3xl">
                <ul className="flex justify-evenly items-center text-white text-lg font-bold">
                    <li className="bg-slate-500 px-3 py-1 rounded-md"><Link href={"/"}>anasayfa</Link></li>
                    <li className="bg-slate-500 px-3 py-1 rounded-md"><Link href={"/urunler"}>ürünler</Link></li>
                    <li className="bg-slate-500 px-3 py-1 rounded-md">sepet</li>
                </ul>
            </header>  
    )
}