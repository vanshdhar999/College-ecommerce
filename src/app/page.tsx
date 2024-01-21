// Import necessary dependencies and components
import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

// Define the Home component
export default async function Home() {
  try {
    // Fetch products from the database
    const products = await prisma.product.findMany({
      orderBy: { id: "desc" },
    });

    // Return the JSX structure
    return (
      <div>
        {/* Header Section */}
        <header className="text-white p-4">
          {/* Add the welcome text */}
          <h1 className="text-center text-4xl font-bold mb-4 text-blue-500">Welcome to College Bay !</h1>

          <div className="flex flex-col items-center justify-center"> {/* Center the content */}
            {/* Sell Your Item Button */}
            <Link href="/add-product" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-500 hover:bg-green-600 text-white mb-2"> {/* Style the button */}
              Sell Your Item
            </Link>
            
            {/* Subtitle */}
            <p className="text-3xl text-center text-gray-400">Check Out these awesome deals from across your college.</p>
          </div>
        </header>

        {/* Hero Section */}
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
            <div>
              <h1 className="text-5xl font-bold">{products[0].name}</h1>
              <p className="py-6">{products[0].description}</p>
              <p className="text-white-500 font-bold">Brand New Item!</p>
              <Link
                href={`/products/${products[0].id}`}
                className="btn-primary btn"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(1).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {/* FAQ Section in the Footer */}
        <footer className="bg-black-100 p-4 mt-8">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-lg font-bold mb-2 text-blue-500">Q: How can I sell my items on CollegeBay?</h3>
        <p>A: To sell your items, simply click on the "Sell Your Item" button and follow the steps to add your product details.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 text-blue-500">Q: Is there a fee for listing items on CollegeBay?</h3>
        <p>A: Listing your items on CollegeBay is currently free of charge.</p>
      </div>
      {/* Add more FAQ items as needed */}
      <div>
        <h3 className="text-lg font-bold mb-2 text-blue-500">Q: Do I have to Sign In before listing my item on the market?</h3>
        <p>A: Yes, you have to.</p>
      </div>
    </div>
  </div>
</footer>

      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    // Handle the error, e.g., display a message to the user or redirect to an error page.
  }
}
