import ProductCard from "@/components/partials/user/ProductCard";

export default async  function ProductsPage() {
    const { products: Products } = await fetch("https://dummyjson.com/products").then(r => r.json())

    return (
        <>
            <form action="">
                <input type="text" name="" id="" placeholder="ürün ara"
                className="border-zinc-300 focus:border-zinc-700 border-2 ms-2 py-1 px-2 rounded-md"/>
            </form>

            <div className="grid grid-cols-12">
                {/* {Array.from({ length: 12}).map((_, index) => (
                <ProductCard key={index}/>
                ))} */}
                {Products.map((p,i) => (
                <ProductCard key={p.id} product={p}/>
                ))}
            </div>
        </>
    )
}