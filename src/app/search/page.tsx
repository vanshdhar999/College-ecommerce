import prisma from "@/lib/db/prisma"
import ProductCard from "@/components/ProductCard"
import { Metadata } from "next"

interface SearchPageProps {
    searchParams: { query: string}
}

export function generateMetadata({searchParams : {query}}: SearchPageProps) : Metadata{

    return{

        title: `Search : ${query} - CollegeBay`

    };
}

export default async function SearchPage({searchParams : {query}}: SearchPageProps){
    const products = await prisma.product.findMany({

        where:{
            OR: [
                { name: {contains: query, mode: "insensitive"} }, 
                { description: {contains: query, mode: "insensitive"}}, 

            ]
        }, 
        orderBy: {id: "desc"}
    })

    if (products.length === 0){

        return <div className="text-center"> No products found !</div>

    }

    return(

        <div>
            {products.map(product => (
                <ProductCard product = {product} key={product.id}/>
            ))}
        </div>
    )

}