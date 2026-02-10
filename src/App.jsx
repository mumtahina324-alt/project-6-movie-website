import { useReducer, useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Slidebar from "./components/common/Slidebar";
import MovieList from "./components/movie/MovieList";
import { MovieContext, ThemeContext } from "./Context";
import { cartReducer, initialState } from "./reducers/CartReducer";

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
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
