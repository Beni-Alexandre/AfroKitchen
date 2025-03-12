import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/#products" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "Contact", path: "/#contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenu = () => setIsMenuOpen(true);
  const hideMenu = () => setIsMenuOpen(false);
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600 ">
          <Link to="/">Afro Kitchen</Link>
        </div>
        <nav>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-green-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link to="/cart" className="relative group">
            <ShoppingCart size={24} className="  hover:text-green-600" />
          </Link>
          <button className="md:hidden " onClick={() => showMenu()}>
            <Menu size={24} />
          </button>
        </nav>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-green-600 transition-transform duration-1000 ease-in-out transform ${
          isMenuOpen ? "translate-x-0 w-50" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4">
          <X size={24} onClick={hideMenu} />
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="block text-white hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
export default Header;
