import { Card, CardContent, CardFooter } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

// import ScrollAnimation from "react-animate-on-scroll";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: string;
  ingredients: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    // <ScrollAnimation animateIn="fadeIn">
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-full object-cover h-48"
      />
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
    // </ScrollAnimation>
  );
}
