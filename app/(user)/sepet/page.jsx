import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

export default async function BasketPage() {

    const supabase = createClient();
    let { data: basketItems, error } = await supabase
    .from('basket')
    .select("*, products(*)")
    .eq('user_id', 1)

    let sepetToplam = 0;
    let sepetSayi = basketItems.length

    
    basketItems.map(e => {
        sepetToplam += e.products.price * e.quantity
        
    })

    return(
        <>
            <div className="mx-2 md:mx-auto mb-8">
            <h1 className="text-center mb-1 p-4 text-2xl font-semibold text-gray-700  bg-lime-200 rounded-t-3xl rounded-b-md">alışveriş sepetim</h1>
                {basketItems.map(e => (
                <div key={e.id} className="flex flex-col items-center p-4 border-slate-300 border rounded-lg shadow-lg   hover:shadow-xl hover:bg-lime-200 mb-2">
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
                <p className="bg-lime-200 text-center text-xl font-bold text-gray-700 p-4 rounded-b-3xl rounded-t-md    shadow-2xl">Sepet Tutarı:  {sepetToplam} ₺</p>
            </div>
            
        
        </>
    )
}