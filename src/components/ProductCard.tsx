import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from 'next/image'


interface ProductCardProps {

    product: Product;
}

export default function ProductCard({product}: ProductCardProps) {

    return(
        <Link href={"/products/" + product.id}
             className="card w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:shadow-md transition-shadow">
                <figure>

                    <Image 
                     src = {product.imageUrl}
                     alt = {product.name}
                     width = {800}
                     height={400}
                     className="h-48 object-cover"
                     />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title text-xl font-bold">{product.name}</h2>
                    <PriceTag price = {product.price}/>
                </div>
        </Link>
    )
}


