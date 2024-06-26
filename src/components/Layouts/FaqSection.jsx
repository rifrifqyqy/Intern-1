import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
  const style_title = "text-xl hover:no-underline hover:bg-gray-100 font-medium [&[data-state=open]]:font-bold [&[data-state=open]]:bg-gray-800 [&[data-state=open]]:text-white px-5 ";
  const style_content = "bg-gray-800 text-white px-5";
  return (
    <>
      <div className="mx-32 mt-16">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className={style_title}>Bagaimana cara mendaftar COURSE?</AccordionTrigger>
            <AccordionContent className={style_content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit nesciunt recusandae nostrum, totam minus labore porro accusamus quaerat, sed sapiente autem reiciendis, dolorem omnis laboriosam quibusdam harum
              tempora ipsam? Eligendi excepturi dolorem ex, praesentium illum vel consequatur incidunt saepe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className={style_title}>Apa saja yang ditawarkan dalam COURSE?</AccordionTrigger>
            <AccordionContent className={style_content}>
              <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laboriosam.</h1>
              <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laboriosam.</h1>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className={style_title}>Bagaimana metode pembayarannya?</AccordionTrigger>
            <AccordionContent className={style_content}>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
