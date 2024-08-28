import ProductCard from "@/components/partials/user/ProductCard";

export default async (ProductsPage) => {
    const { products: Products } = await fetch("https://dummyjson.com/products").then(r => r.json())

    return (
        <>
            {/* <ProductCard/> */}
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