import { Bell, Moon, Search, ShoppingCart, Sun } from "lucide-react";
import { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import { MovieContext, ThemeContext } from "../../Context";
import Cart from "../cart/Cart";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light",
    );
  };

  return (
    <>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      <nav className="container flex items-center justify-between space-x-4 md:space-x-10 py-6">
        {/* Logo */}
        <a href="/">
          <img src={Logo} width="130" height="20" alt="Company Logo" />
        </a>

        {/*Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search......."
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2
                 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Icons */}
        <ul className="flex items-center space-x-2 md:space-x-3">
          <li>
            <a
              href="#"
              className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-2 inline-block"
            >
              <Bell size={20} className="text-primary fill-primary" />
            </a>
          </li>

          <li>
            <a
              onClick={toggleTheme}
              href="#"
              className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-2 inline-block"
            >
              {darkMode ? (
                <Moon size={20} className="text-primary fill-primary" />
              ) : (
                <Sun size={20} className="text-primary fill-primary" />
              )}
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-2 inline-block relative"
            >
              <ShoppingCart size={20} className="text-primary fill-primary" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full px-1.5 min-w-4.5 h-4.5 flex items-center justify-center">
                {cartData.length}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
