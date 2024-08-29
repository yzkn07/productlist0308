import ProductCard from "@/components/partials/user/ProductCard"
import { notFound } from "next/navigation"

export default async function ProductDetailPage({ params }) {
    const { id } = params
    const request = await fetch(`https://dummyjson.com/products/${id}`)    
    if (!request.ok) {
        return notFound()
    }
    const alisVerisDurumu = true
    const product = await request.json()
    return (
        <>
            <ProductCard product={product} alisVeris={alisVerisDurumu}/>
        </>
    )
}