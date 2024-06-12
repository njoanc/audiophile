import Hero from "./Hero";
import ProductCategory from "../../shared/ProductCategory";
import ProductShowcase from "./ProductShowcase";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCategory />
      <ProductShowcase />
    </div>
  );
};

export default Home;
