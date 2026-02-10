import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Slidebar from "./components/common/Slidebar";
import MovieList from "./components/movie/MovieList";
import { MovieContext, ThemeContext } from "./Context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <div>
          <Toaster />
          <Navbar />
          <div className="container grid lg:grid-cols-[218px_1fr] gap-12">
            <Slidebar />
            <MovieList />
          </div>
          <Footer />
        </div>
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
