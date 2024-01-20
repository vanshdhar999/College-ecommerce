import ProductCard from "@/components/ProductCard";
import  prisma  from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (

    <div>
        <ProductCard product={products[0]} />
    </div>
  )
}

