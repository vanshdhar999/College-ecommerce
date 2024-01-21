import PriceTag from "@/components/PriceTag";
import  prisma  from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";


interface ProductPageProps {
    params: {
      id: string;
    };
  }
  
  const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) notFound();
    return product;
  });
  
  export async function generateMetadata({
    params: { id },
  }: ProductPageProps): Promise<Metadata> {
    const product = await getProduct(id);
  
    return {
      title: product.name + " - CollegeBay",
      description: product.description,
      openGraph: {
        images: [{ url: product.imageUrl }],
      },
    };
  }
  
  export default async function ProductPage({
    params: { id },
  }: ProductPageProps) {
    const product = await getProduct(id);
  
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center p-8">
  <Image
    src={product.imageUrl}
    alt={product.name}
    width={500}
    height={500}
    className="rounded-lg"
    priority
  />

  <div className="flex flex-col gap-4">
    <h1 className="text-5xl font-bold">{product.name}</h1>
    <PriceTag price={product.price} className="mt-4" />
    <h1 className="text-2xl text-gray-600"> {product.tag}</h1>
    <p className="py-6 text-lg text-white-400"><h2 className="text-3xl ">Product Description</h2>{product.description}</p>

    {/* New Section for Seller's Contact Information and Quantity */}
    <div className="bg-gray-400 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800">
        Seller's Contact Information
      </h2>
      <p className="text-lg text-gray-700">Contact Number: {product.contact}</p>
      <p className="text-lg text-gray-700">Email Address: {product.email}</p>
      <p className="text-lg text-gray-700">Quantity: {product.quantity}</p>
    </div>

    {/* New Section for Buyers to Contact the Seller */}
    <div className="mt-8 bg-gray-400 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800">How to Buy?</h2>
      <p className="text-lg text-gray-700">
        If you are interested in purchasing this item, please contact the seller
        using the provided contact details and set up a real-time meeting as soon as possible.
      </p>
    </div>
  </div>
</div>

    );
  };
