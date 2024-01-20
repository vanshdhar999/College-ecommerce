// src/app/ItemDetails.js
import React from 'react';
import DefaultLayout from './layout';

const ItemDetails = ({ match }) => {
  // Extract item ID from the URL parameter
  const itemId = match.params.itemId;

  // Mock data for the item (replace this with your actual data)
  const item = {
    id: itemId,
    images: ['/item1.jpg', '/item2.jpg', '/item3.jpg', '/item4.jpg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    negotiable: true,
    price: '$50',
    seller: {
      name: 'John Doe',
      contact: 'john.doe@example.com',
    },
  };

  return (
    <DefaultLayout>
      <div className="p-8">
        <h1 className="text-3xl font-semibold mb-4">Item Details</h1>

        <div className="grid grid-cols-2 gap-8">
          {/* Display item images */}
          <div className="col-span-2 mb-4">
            {item.images.map((image, index) => (
              <img key={index} src={image} alt={`Item ${index + 1}`} className="w-full mb-2" />
            ))}
          </div>

          {/* Display item details */}
          <div className="col-span-2">
            <p className="text-lg mb-2">{item.description}</p>
            <p className="text-lg mb-2">Price: {item.price}</p>
            <p className="text-lg mb-2">Negotiable: {item.negotiable ? 'Yes' : 'No'}</p>
          </div>

          {/* Display seller information */}
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-2">Seller Information</h2>
            <p className="text-lg mb-2">Seller: {item.seller.name}</p>
            <p className="text-lg mb-2">Contact: {item.seller.contact}</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ItemDetails;
