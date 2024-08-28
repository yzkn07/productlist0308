import Link from "next/link"
export default function UserHeader() {
    return (
        <header className="p-2">
                <ul className="flex justify-evenly items-center">
                    <li><Link href={"/"}>anasayfa</Link></li>
                    <li><Link href={"/urunler"}>ürünler</Link></li>
                    <li>iletişim</li>
                </ul>
            </header>
    )
}