import { useEffect, useState } from "react";
import ProductCard from "./product-card";

const ProductsListing = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await fetch("https://dummyjson.com/products");
    const data = await result.json();
    if (data && data.products) setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "20px",
      }}
    >
      {products.length > 0 &&
        products.map((product) => <ProductCard product={product} />)}
    </div>
  );
};

export default ProductsListing;
