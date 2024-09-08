"use server"

import { createClient } from "@/utils/supabase/server"

export default async function AddToBasket(formData){
    const supabase = createClient()
    // const { error } = await supabase
    // .from('basket')
    // .insert({ id: 1, name: 'Denmark' })

    console.log(formData);
    
    
}