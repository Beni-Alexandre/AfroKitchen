import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "Products", path: "#products" },
  { name: "Contact", path: "#contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">Afro Kitchen</div>
        <nav>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="hover:text-green-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-1000 ease-in-out md:hidden`}
      >
        {" "}
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="hover:text-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}
export default Header;
