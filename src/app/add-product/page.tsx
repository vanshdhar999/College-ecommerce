import FormSubmitButton from "@/components/FormSubmitButton";
import prisma  from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '@/lib/AuthOptions';

export const metadata = {
    title : "Add product - CollegeBay"
}


async function addProduct(formData: FormData) {
    "use server";
  
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);
    const tag = formData.get("tag")?.toString();
    const quantity = Number(formData.get("quantity"));
    const email = formData.get("email")?.toString();
    const contact = Number(formData.get("contact"));



    if (!name || !description || !imageUrl || !price || !tag || !email || !contact || !quantity) {
        throw Error("Missing required fields");
      }

      await prisma.product.create({
        data: { name, description, imageUrl, price, tag, contact, email, quantity },
      });
    
      redirect("/");
    }

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {

    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  return (
    <div className="text-center">
      <h1 className=" text-4xl mb-3 font-bold"> Add Item Details</h1>
      <form action = {addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        {/* Add the Tag field with text input */}
        <input
          required
          name="quantity"
          placeholder= "Quantity"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        <select
          required
          name="tag"
          className="input-bordered input mb-3 w-full"
        >
          <option value="" disabled selected>Select Tag</option>
          <option value="negotiable">Negotiable</option>
          <option value="non-negotiable">Non-Negotiable</option>
        </select>
        <input
          required
          name="contact"
          placeholder= "Contact Number"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="email"
          placeholder="Email Address"
          type = "string"
          className="input-bordered input mb-3 w-full"
        />
        {/* Additional fields can be added as needed */}
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}