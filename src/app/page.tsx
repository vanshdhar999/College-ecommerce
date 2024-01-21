import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "desc" },
    });

    return (
      <div>
        {/* Header Section */}
        <header className=" text-white p-4">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            {/* <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <h1 className="text-2xl font-bold">CollegeBay</h1>
            </div> */}

            {/* Center Section - Search Bar */}

            {/* Right Section */}
            <div className=" gap-2 flex items-center">
              {/* Login Button */}
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Login</button>
              {/* My Account Link */}
              <Link href="/MyAccount" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                My Account
              </Link>
              {/* Sell Your Item Button */}
              <Link href="/add-product" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Sell Your Item
              </Link>
            </div>
          </div>
        </header>

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
              <Link
                href={`/products/${products[0].id}`}
                className="btn-primary btn"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>

        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(1).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {/* FAQ Section in the Footer */}
        <footer className="bg-black-100 p-4 mt-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-bold">Q: How can I sell my items on CollegeBay?</h3>
                <p>A: To sell your items, simply click on the "Sell Your Item" button and follow the steps to add your product details.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Q: Is there a fee for listing items on CollegeBay?</h3>
                <p>A: Listing your items on CollegeBay is currently free of charge.</p>
              </div>
              {/* Add more FAQ items as needed */}
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
