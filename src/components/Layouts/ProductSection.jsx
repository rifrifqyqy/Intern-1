import { getCourses, getProduct } from "@/services/product.service";
import CardProduct from "../CardProduct";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
export default function ProdSection() {
  const [products, setProducts] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    getCourses((data) => {
      console.log(data);
      setCourses(data.data_course);
    });
  }, []);

  return (
    <>
      <div className="mx-32 flex flex-col gap-4 mt-16">
        <div className="flex justify-between">
          <h1 className="text-xl font-[600]">Rekomendasi untuk Anda</h1>
          <Button variant="ghost" className="rounded-none hover:text-[#daa000] text-[#daa000] transition ease-linear 0.2s">
            Lihat Semua
          </Button>
        </div>
        <div className=" grid grid-cols-6 gap-8 justify-items-center">
          {courses.length > 0 &&
            courses.slice(0, 6).map((product) => (
              <CardProduct key={product.id} to={`/product-details/${product.id}`}>
                <CardProduct.header src={product.thumb}></CardProduct.header>
                <CardProduct.body title={product.title} price={parseInt(product.price)}></CardProduct.body>
              </CardProduct>
            ))}
        </div>
      </div>
    </>
  );
}
