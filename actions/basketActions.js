"use server"

import { createClient } from "@/utils/supabase/server"

export default async function AddToBasket(formData){
    const supabase = createClient()
    const { error } = await supabase
    .from('basket')
    .insert({
        product_id: parseInt(formData.get("productId")), 
        quantity: parseInt(formData.get("quantity")) 
        })

    console.log(formData);
    
    
}