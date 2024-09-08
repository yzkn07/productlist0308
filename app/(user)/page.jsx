
export default async function HomePage() {
  return (

      <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="flex items-center justify-center bg-gradient-to-r from-sky-500 to-blue-600 text-white text-2xl font-semibold border-slate-300 border rounded-2xl shadow-md py-6 px-8 mt-6 mx-auto">
          E-commerce Projesi
        </h1>
        
        <div className="space-y-6 mt-8 text-gray-700">
          <div className="bg-white text-lg leading-relaxed border-slate-300 border rounded-2xl shadow-md p-6">
            <p>
              Bu projede <span className="font-semibold text-sky-600">Next.js</span> kullanılarak, 
              <span className="font-semibold text-sky-600"> Supabase</span> entegresi sayesinde
              ürünleri listeledim. Her bir ürün için ulaşılabilen bir ürün detay sayfası ekledim.
              Next.js app router ile dinamik router kullanılarak oluşturulan detay sayfalarında 
              kart yapısına sepete ekle ve ürün açıklamaları eklendi.
            </p>
          </div>

          <div className="bg-white text-lg leading-relaxed border-slate-300 border rounded-2xl shadow-md p-6">
            <p>
              <span className="font-semibold text-sky-600">Search</span> özelliği, filtre özelliği 
              URL{"'"}den gelen sluglar sayesinde sağlandı. Ürün adına, en düşük fiyata, en yüksek fiyata
              ve ürün kategorisine göre filtreleme bu sayede yapılabilmektedir.
            </p>
          </div>

          <div className="bg-white text-lg leading-relaxed border-slate-300 border rounded-2xl shadow-md p-6">
            <p>
              En nihayetinde bu bir <span className="font-semibold text-sky-600">Next.js</span> öğrenme projesidir.
            </p>
          </div>
        </div>
      </div>

  );
}
