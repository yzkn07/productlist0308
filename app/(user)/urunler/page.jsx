import { ProductFilterAction } from "@/actions/searchAction";
import ProductCard from "@/components/partials/user/ProductCard";
import { createClient } from '@/utils/supabase/server'


export default async  function ProductsPage({ searchParams }) {


    const supabase = createClient();

    

    let { data: products } = await supabase.from('products').select(`
        *,
        product_categories (
          *
        )
      `)
    const {data: categories} = await supabase.from('product_categories').select('name');
    // console.log(products.map(p => p.product_categories.name));
    
    
    // let { products: Products } = await fetch("https://dummyjson.com/products?limit=194").then(r => r.json())
    // console.log();
    
    if( searchParams.productName){
        products = products.filter(p => 
            p.title.toLocaleLowerCase().includes(searchParams.productName.toLocaleLowerCase()))
    } 
    if( searchParams.minPrice){
        products = products.filter(p => p.price >= parseFloat(searchParams.minPrice))
    }
    if( searchParams.maxPrice){
        products = products.filter(p => p.price <= parseFloat(searchParams.maxPrice))
    }
    if(searchParams.categoryName){
        products = products.filter(p => p.product_categories.name == searchParams.categoryName)
    }
    

    return (
        <>
            <form action={ProductFilterAction} className="mb-2 flex flex-col mx-2">
                <input type="text" name="productName" id="" placeholder="ürün ara"
                className="border-zinc-300 focus:border-zinc-700 border-2 py-2 px-2 rounded-md mb-2"/>
               
                {/* <input type="text" name="productCategory" id="" placeholder="kategori ara"
                className="border-zinc-300 focus:border-zinc-700 border-2 py-1 px-2 rounded-md mb-2"/> */}

                <input type="number" name="minPrice" id="" placeholder="en düşük fiyat gir"
                className="border-zinc-300 focus:border-zinc-700 border-2 py-2 px-2 rounded-md mb-2"/>
                
                <input type="number" name="maxPrice" id="" placeholder="en yüksek fiyat gir"
                className="border-zinc-300 focus:border-zinc-700 border-2 py-2 px-2 rounded-md mb-2"/>

                <select name="categoryName" id=""
                className="border-zinc-300 focus:border-zinc-700 border-2 py-2 px-2 rounded-md mb-2">
                    <option value="hepsi">hepsi</option>
                    {categories.map((category,i) => (
                        <option value={category.slug} key={i}>{category.name}</option>
                    ))}
                </select>
                
                <button className="mx-auto bg-transparent p-4 w-40 text-center font-light text-xl rounded-xl border border-slate-500 active:bg-blue-300 ">Ara</button>

            </form>
            


            <div className="grid grid-cols-12">
                {/* {Array.from({ length: 12}).map((_, index) => (
                <ProductCard key={index}/>
                ))}  */}
                    {/* bütün ürünleri listeliyor  */}
                
                    {/* searchParams varsa productName geliyor, p.title ile eşleşenleri listele */}
                {/* {searchParams.productName ? products.filter(p => p.title.toLocaleLowerCase().includes(searchParams.productName.toLocaleLowerCase())).map(p => (
                    <ProductCard key={p.id} product={p}/>
                )) : products.map(p => (
                    <ProductCard key={p.id} product={p}/>
                    ))
                } */}
                {products.length < 1 ? (
                    <div><h1>hiç ürün bulunamadı</h1></div>
                ) : (
                    products.map(p => (
                        <ProductCard key={p.id} product={p}/>)) 
                        
                )}

            </div>
        </>
    )
}