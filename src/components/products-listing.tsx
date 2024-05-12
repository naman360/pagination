import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import Pagination from "./pagination";

const ProductsListing = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchProducts = async () => {
    const result = await fetch("https://dummyjson.com/products?limit=100");
    const data = await result.json();
    if (data && data.products) setProducts(data.products);
  };
  const handlePageNumberChange = (newPageNumber: number) => {
    if (newPageNumber - 1 >= 0 && newPageNumber <= products.length / 10)
      setPageNumber(newPageNumber);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {products.length > 0 &&
          products
            .slice(pageNumber * 10 - 10, pageNumber * 10)
            .map((product) => <ProductCard product={product} />)}
      </div>
      <Pagination
        pageNumber={pageNumber}
        handlePageNumberChange={handlePageNumberChange}
        totalPages={products.length / 10}
      />
    </div>
  );
};

export default ProductsListing;
