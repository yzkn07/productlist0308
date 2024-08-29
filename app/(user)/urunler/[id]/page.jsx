import ProductCard from "@/components/partials/user/ProductCard"

export default async function ProductDetailPage({ params }) {
    const { id } = params
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(r => r.json())
    return (
        <>
            <ProductCard product={product}/>
        </>
    )
}