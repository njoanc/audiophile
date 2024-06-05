import Hero from "./Hero";
import ProductCategory from "../../shared/ProductCateogry";
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
