import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    categoty: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.categoty === "all" || product.categoty === filters.categoty)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return ( 
   <>
   <Header setFilters />
   <Products products={filteredProducts} /> 
   </>

  )
}

export default App;
