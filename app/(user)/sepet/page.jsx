import { createClient } from "@/utils/supabase/server"
import Image from "next/image";
export default async function BasketPage() {
    const supabase = createClient()
    let { data: basketItems, error } = await supabase
    .from('basket')
    .select("*, products(*)")
    .eq('user_id', 1)
    console.log(basketItems);
    let sepetToplam = 0;
    basketItems.map(e => {
        sepetToplam += e.products.price * e.quantity
    })

    return(
        <>
            <h1 className="text-center mx-2 mb-1 p-4 text-2xl font-semibold text-gray-700 sha bg-lime-200 rounded-t-3xl">alışveriş sepetim</h1>
            <div className="mx-2 mb-8 ">
                {basketItems.map(e => (
                <div key={e.id} className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-4 rounded-lg shadow-lg   hover:shadow-xl hover:bg-lime-200 mb-2">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                        <Image src={e.products.thumbnail} height={100} width={100} alt={e.products.title} className="rounded-lg" priority />
                        </div>
                        <div className="flex flex-col space-y-2 items-center">
                            <p className="text-lg font-semibold text-gray-700">{e.products.title} <span className="ms-2">X {e.quantity}</span></p>
                            <p className="text-md text-gray-600">fiyat: {e.products.price} ₺</p>
                            <p className="text-md text-gray-600">toplam tutar: {e.products.price * e.quantity} ₺</p>
                        </div>
                </div>
                ))}
                <p className="bg-lime-200 text-center text-xl font-bold text-gray-700 p-4 rounded-b-3xl  shadow-2xl">Sepet Tutarı:  {sepetToplam} ₺</p>
            </div>
        
        </>
    )
}