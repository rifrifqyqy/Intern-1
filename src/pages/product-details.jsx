import FooterSection from "@/components/Layouts/FooterSection";
import ProdSection from "@/components/Layouts/ProductSection";
import SidebarRightLayout from "@/components/Layouts/SideRightLayouts";
import NavigationBar from "@/components/NavigationBar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "@/services/product.service";
import ProductDetailCard from "@/components/Fragments/ProductDetailCard";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const [top, setTop] = useState("top-0");
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(product);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setTop("top-[75px]");
      } else {
        return;
      }
    });
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="mx-32 mt-16">
        <SidebarRightLayout>
          <SidebarRightLayout.LeftContent heightContent="h-fit">
            <div className="w-full flex justify-between bg-white gap-16">
              <div className="w-1/5 h-full bg-slate-400">sa</div>
              <div className="w-4/5 h-[600px]">
                <img src={product.image} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex flex-col mt-16 gap-16">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold">DESCRIPTION</h1>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="">Terkait Produk</AccordionTrigger>
                    <AccordionContent className="">{product.description}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="">Apa saja yang ditawarkan dalam COURSE?</AccordionTrigger>
                    <AccordionContent className="">
                      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laboriosam.</h1>
                      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laboriosam.</h1>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="">Bagaimana metode pembayarannya?</AccordionTrigger>
                    <AccordionContent className="">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold">ULASAN{id}</h1>
              </div>
            </div>
          </SidebarRightLayout.LeftContent>
          <SidebarRightLayout.SideSticky top={top}>
            <section className="h-96 bg-white flex flex-col divide-y-2 gap-8">
              <ProductDetailCard title={product.title} price={parseFloat(product.price).toLocaleString("en-US", { style: "currency", currency: "USD" })} desc={product.description} category={product.category}></ProductDetailCard>

              <section className="flex gap-2 ml-2 pt-8">
                <div className="w-16 h-16  text-amber-600 font-medium  hover:border-amber-600 hover:bg-amber-600 hover:text-white flex items-center justify-center text-xl">
                  <h1 className="border-gray-200 border-[1px] hover:border-2 active:rounded-[3px] active:border-[4px] h-[63px] w-[63px] mx-[1px] flex items-center justify-center">
                    <p>XL</p>
                  </h1>
                </div>
                <div className="w-16 h-16  text-amber-600 font-medium  hover:border-amber-600 hover:bg-amber-600 hover:text-white flex items-center justify-center text-xl">
                  <h1 className="border-gray-200 border-[1px] hover:border-2 active:rounded-[3px] active:border-[4px] h-[63px] w-[63px] mx-[1px] flex items-center justify-center">
                    <p>L</p>
                  </h1>
                </div>
              </section>
              <div className="flex mt-8">
                <Button className="rounded-none w-full font-semibold text-lg h-12 bg-amber-600 hover:bg-amber-600 hover:opacity-80">
                  <h1>TAMBAH KE KERANJANG</h1>
                </Button>
              </div>
            </section>
          </SidebarRightLayout.SideSticky>
        </SidebarRightLayout>
      </div>
      <ProdSection />
      <FooterSection />
    </>
  );
}
