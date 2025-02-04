import Footer from "./footer";
import Header from "./header";
import ProductCard from "./ProductCard";
import WhatsAppLink from "./WhatsAppLink";
const products = [
  {
    id: 1,
    name: "Jollof Spice Mix",
    price: 10,
    quantity: "200g",
    ingredients: "Paprika, Cumin, Thyme, Garlic powder, Ginger, Chili flakes",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 2,
    name: "Suya Seasoning",
    price: 12,
    quantity: "150g",
    ingredients: "Peanut powder, Cayenne pepper, Ginger, Garlic, Onion powder",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 3,
    name: "Pap Spice Blend",
    price: 7.99,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 4,
    name: "Pap Spice Blend",
    price: 15,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 5,
    name: "Pap Spice Blend",
    price: 20,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 6,
    name: "Pap Spice Blend",
    price: 55,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 7,
    name: "Pap Spice Blend",
    price: 65,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 8,
    name: "Pap Spice Blend",
    price: 45,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 9,
    name: "Pap Spice Blend",
    price: 40,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 10,
    name: "Pap Spice Blend",
    price: 30,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 11,
    name: "Pap Spice Blend",
    price: 70,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 12,
    name: "Pap Spice Blend",
    price: 7,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 13,
    name: "Pap Spice Blend",
    price: 9,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 14,
    name: "Pap Spice Blend",
    price: 79,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
  {
    id: 15,
    name: "Pap Spice Blend",
    price: 99,
    quantity: "100g",
    ingredients: "Cinnamon, Nutmeg, Cloves, Ginger, Cardamom",
    image: "/img/Afrokitchenpic001.jpg",
  },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <div
        className="container mx-auto px-4 text-center"
        style={{ backgroundImage: "url('./img/Afrokitchenpic001.jpg')" }}
      >
        <h1 className="text-white text-9xl">AfroKitchen</h1>
      </div> */}
      <section
        id="home"
        className="bg-green-50 py-20 mt-17"
        style={{ backgroundImage: "url('./img/Afrokitchenpic002.jpg')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-white font-bold mb-4">
            Welcome to Afro Kitchen
          </h1>
          <p className="text-xl text-white mb-8">
            Discover the rich flavors of African cuisine with our premium
            seasonings.
          </p>
          <a
            href="#products"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
          >
            Explore Our Products
          </a>
        </div>
      </section>
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-xl mb-8">
            Have questions about our products? We're here to help!
          </p>
          <WhatsAppLink />
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Home;
