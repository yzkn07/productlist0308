"use server"

import { createClient } from "@/utils/supabase/server"

export default async function AddToBasket(formData){
    const supabase = createClient()

    const { data: controlData, error: controlError } = await supabase
        .from('basket')
        .select('*')
        .match({ user_id: 1, product_id: parseInt(formData.get("productId")) }).single()

        if(controlData){
                console.log(controlData.quantity);
             
                const { error } = await supabase
                    .from('basket')
                    .update({ quantity:controlData.quantity + parseInt(formData.get("quantity"))})
                    .eq('id', controlData.id )

            console.log("sepet güncellendi");
            
        }else {
            const { error } = await supabase
            .from('basket')
            .insert({
                product_id: parseInt(formData.get("productId")), 
                quantity: parseInt(formData.get("quantity")) 
            })
            
            console.log("ürün sepete eklendi");
        }
        
        
        



    

}