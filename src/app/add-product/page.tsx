import FormSubmitButton from "@/components/FormSubmitButton";
import prisma  from "@/lib/db/prisma";
import { redirect } from "next/navigation";

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

    if (!name || !description || !imageUrl || !price || !tag) {
        throw Error("Missing required fields");
      }

      await prisma.product.create({
        data: { name, description, imageUrl, price, tag },
      });
    
      redirect("/");
    }


export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
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
          type="string"
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
          name="tag"
          placeholder="Negotiable or Non-Negotiable"
          type = "string"
          className="input-bordered input mb-3 w-full"
        />
        {/* Additional fields can be added as needed */}
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
