import ProductCard from "@/components/partials/user/ProductCard"
import { notFound } from "next/navigation"
import { createClient } from '@/utils/supabase/server'
// export default async function ProductDetailPage({ params }) {
//     const { id } = params
//     const request = await fetch(`https://dummyjson.com/products/${id}`)    
//     if (!request.ok) {
//         return notFound()
//     }
//     const alisVerisDurumu = true
//     const product = await request.json()
//     return (
//         <>
//             <ProductCard product={product} alisVeris={alisVerisDurumu}/>
//         </>
//     )
// }

export default async function ProductDetailPage({ params }) {

  const supabase = createClient();
  
    const { slug } = params  

      const { data: product, error } = await supabase
      .from('products')
      .select(`
        *,
        product_categories (
          *
        )
      `)
      .eq('slug', slug).single()
    // if (!product.ok) {
    //     return notFound()
    // }
    const alisVerisDurumu = true
    // const product = await request.slug
    if(!product) { return notFound()}
    
    return (
        <>
            <ProductCard product={product} alisVeris={alisVerisDurumu}/>
            
        </>
    )
}