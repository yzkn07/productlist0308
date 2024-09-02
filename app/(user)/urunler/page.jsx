import { ProductFilterAction } from "@/actions/searchAction";
import ProductCard from "@/components/partials/user/ProductCard";

export default async  function ProductsPage({ searchParams }) {
    let { products: Products } = await fetch("https://dummyjson.com/products").then(r => r.json())
    if( searchParams.productName){
        Products = Products.filter(p => 
            p.title.toLocaleLowerCase().includes(searchParams.productName.toLocaleLowerCase()))
    } 
    if( searchParams.minPrice){
        Products = Products.filter(p => p.price >= searchParams.minPrice)
    }
    

    return (
        <>
            <form action={ProductFilterAction} className="mb-2 flex flex-col mx-2">
                <input type="text" name="productName" id="" placeholder="ürün ara"
                className="border-zinc-300 focus:border-zinc-700 border-2 py-1 px-2 rounded-md mb-2"/>
               
                {/* <input type="text" name="productCategory" id="" placeholder="kategori ara"
                className="border-zinc-300 focus:border-zinc-700 border-2 py-1 px-2 rounded-md mb-2"/> */}

                <input type="number" name="minPrice" id="" placeholder="en düşük fiyat gir"
                className="border-zinc-300 focus:border-zinc-700 border-2 py-1 px-2 rounded-md mb-2"/>
               
                <button className="bg-gray-400 py-1 px-4 rounded-md text-white text-lg">ara</button>
            </form>
            


            <div className="grid grid-cols-12">
                {/* {Array.from({ length: 12}).map((_, index) => (
                <ProductCard key={index}/>
                ))}  */}
                    {/* bütün ürünleri listeliyor  */}
                
                    {/* searchParams varsa productName geliyor, p.title ile eşleşenleri listele */}
                {/* {searchParams.productName ? Products.filter(p => p.title.toLocaleLowerCase().includes(searchParams.productName.toLocaleLowerCase())).map(p => (
                    <ProductCard key={p.id} product={p}/>
                )) : Products.map(p => (
                    <ProductCard key={p.id} product={p}/>
                    ))
                }    */}
                {Products.map(p => (
                    <ProductCard key={p.id} product={p}/>)) 
                    }
            </div>
        </>
    )
}