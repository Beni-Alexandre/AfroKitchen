import { Card, CardContent, CardFooter } from "./ui/card";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import { useState } from "react";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: string;
  ingredients: string;
  image: string;
  additionalImages: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = React.useState(false);
  // const [showAdditionalImages, setShowAdditionalImages] = useState(false);

  // function toggleAdditionalImages() {
  //   setShowAdditionalImages(!showAdditionalImages);
  // }
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      {/* <img
        src={product.additionalImages[0]}
        alt={product.name}
        width={200}
        height={200}
        className="w-full object-cover h-48"
      /> */}
      {/* <button className="w-full h-48" onClick={toggleAdditionalImages}> */}
      <button className="w-full h-48" onClick={() => setOpen(true)}>
        <img
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full object-cover h-48"
        />
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={product.additionalImages.map((image) => ({ src: image }))}
      />
      {/* </button>

      {showAdditionalImages && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {product.additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="w-full object-cover"
            />
          ))}
        </div>
      )} */}

      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-lg font-bold mb-2 text-green-600">
          GH₵{product.price.toFixed(1)}
        </p>
        <p className="text-sm mb-2">Quantity: {product.quantity}</p>
        <p className="text-sm">Ingredients: {product.ingredients}</p>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Contact us to order!</p>
      </CardFooter>
    </Card>
  );
}
