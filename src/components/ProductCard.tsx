import { Card, CardContent, CardFooter } from "./ui/card";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ShoppingCart } from "lucide-react";

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

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
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

      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-lg font-bold mb-2 text-green-600">
          GH₵{product.price.toFixed(1)}
        </p>
        <p className="text-sm mb-2">Quantity: {product.quantity}</p>
        <p className="text-sm">Ingredients: {product.ingredients}</p>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">Contact us to order!</p>
        <button className="bg-green-600 hover:bg-green-700 rounded-sm flex items-center px-2 py-1">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
}
