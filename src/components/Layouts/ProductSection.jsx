import { getProduct } from "@/services/product.service";
import CardProduct from "../CardProduct";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
export default function ProdSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <div className="mx-32 flex flex-col gap-4 mt-16">
        <div className="flex justify-between">
          <h1 className="text-xl font-[600]">Rekomendasi untuk Anda</h1>
          <Button variant="ghost" className="hover:bg-transparent hover:text-[#daa000] transition ease-linear 0.2s">
            Lihat Semua
          </Button>
        </div>
        <div className=" grid grid-cols-6 gap-8 justify-items-center">
          {products.length > 0 &&
            products.slice(0, 6).map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.header src={product.image}></CardProduct.header>
                <CardProduct.body title={product.title} price={product.price}></CardProduct.body>
              </CardProduct>
            ))}
        </div>
      </div>
    </>
  );
}
