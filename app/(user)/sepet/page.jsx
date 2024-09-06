import { createClient } from "@/utils/supabase/server"

export default async function BasketPage() {
    const supabase = createClient()
    let { data: basketItems, error } = await supabase
    .from('basket')
    .select("*, products(*)")
    .eq('user_id', 1)
    console.log(basketItems);
    

    return(
        <>
            <h1 className="text-center p-4 text-2xl font-semibold text-white sha bg-sky-400">sepet sayfası</h1>
            {basketItems.map(e => (
                <div key={e.id}>
                    <p>ürün: {e.products.title}</p>
                    <p>adet: {e.quantity}</p>
                    <p>fiyat: {e.products.price}</p>
                    <p>sepet tutarı: {e.products.price * e.quantity} ₺</p>
                </div>
            ))}
        </>
    )
}