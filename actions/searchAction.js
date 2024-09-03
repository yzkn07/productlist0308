"use server"

import { redirect } from "next/navigation";

export async function ProductFilterAction(formData) {
    const productName = formData.get("productName")
    // const productCategory = formData.get("productCategory")
    const minPrice = formData.get("minPrice")
    const maxPrice = formData.get("maxPrice")
    
    
    const query = [];
    if(productName){
        query.push(`productName=${productName}`)
    }
    // if(productCategory){
    //     query.push(`productCategory=${productCategory}`)
    // }
    if(minPrice){
        query.push(`minPrice=${minPrice}`)
    }
    if(maxPrice){
        query.push(`maxPrice=${maxPrice}`)
    }
    
    return redirect(`/urunler?${query.join("&")}`)
    
}
