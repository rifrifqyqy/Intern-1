import { Badge } from "@/components/ui/badge";

export default function ProductDetailCard({ title, price, desc, category }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <Badge variant="secondary" className="max-w-fit rounded-none text-md text-gray-800 font-medium">
          {category}
        </Badge>
        <h2 className="text-2xl font-semibold">{price}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
}
