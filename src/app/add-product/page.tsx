import React from 'react';

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form>
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
          name="tag"
          placeholder="Negotiable or Non-Negotiable"
          className="input-bordered input mb-3 w-full"
        />
        {/* Additional fields can be added as needed */}
      </form>
    </div>
  );
}
