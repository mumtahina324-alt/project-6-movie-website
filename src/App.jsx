import Navbar from "./components/common/Navbar";
import Slidebar from "./components/common/Slidebar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
        <Slidebar />
      </div>
    </div>
  );
}
