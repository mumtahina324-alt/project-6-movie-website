import { Bell, Moon, Search, ShoppingCart } from "lucide-react";
import Logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="container flex items-center justify-between space-x-10 py-6">
      {/* Logo */}
      <a href="/">
        <img src={Logo} width="130" height="20" alt="Company Logo" />
      </a>

      {/*Search Bar */}
      <div className="flex-1 flex justify-center px-4">
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
      <ul className="flex items-center space-x-3">
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
            href="#"
            className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-2 inline-block"
          >
            <Moon size={20} className="text-primary fill-primary" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-2 inline-block"
          >
            <ShoppingCart size={20} className="text-primary fill-primary" />
            <span className="absolute bottom-6 left-6 bg-black text-white text-xs rounded-full px-1.5">
              0{" "}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
