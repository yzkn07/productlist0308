"use server"

import { redirect } from "next/navigation";

export async function ProductFilterAction(formData) {
    const productName = formData.get("productName")
    // const productCategory = formData.get("productCategory")
    
    
    const query = [];
    if(productName){
        query.push(`productName=${productName}`)
    }
    // if(productCategory){
    //     query.push(`productCategory=${productCategory}`)
    // }
    
    return redirect(`/urunler?${query.join("&")}`)
    
}
