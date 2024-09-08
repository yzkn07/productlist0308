"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserHeader() {
    const pathname = usePathname();  // usePathname hook'u ile şu anki sayfa yolunu alıyoruz

    return (
        <header className="py-4 mb-4 shadow-md bg-white rounded-xl">
            <ul className="flex justify-evenly items-center text-gray-800 text-lg font-semibold">
                <li className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${pathname === "/" ? "bg-lime-200 text-gray-800 shadow-lg" : "hover:bg-gray-100"}`}>
                    <Link href="/">Anasayfa</Link>
                </li>
                <li className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${pathname === "/urunler" ? "bg-lime-200 text-gray-800 shadow-lg" : "hover:bg-gray-100"}`}>
                    <Link href="/urunler">Ürünler</Link>
                </li>
                <li className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${pathname === "/sepet" ? "bg-lime-200 text-gray-800 shadow-lg" : "hover:bg-gray-100"}`}>
                    <Link href="/sepet">Sepet</Link>
                </li>
            </ul>
        </header>
    );
}
