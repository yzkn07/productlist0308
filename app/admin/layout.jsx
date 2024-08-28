import Link from "next/link";

export default function AdminLayout({ children }) {
    return(
        <div className="xl:container ">
            <header className="p-2 bg-teal-100">
                <ul className="flex justify-between items-center">
                    <li><Link href={"/admin"}>yönetim paneli</Link></li>
                    <li><Link href={"/admin/urunler"}>ürünler</Link></li>
                    <li>destek talepleri</li>
                </ul>
            </header>
            <main>{ children }</main>
        </div>
    )
}