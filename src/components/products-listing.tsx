import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import Pagination from "./pagination";

const ProductsListing = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchProducts = async () => {
    const result = await fetch(
      `https://dummyjson.com/products?skip=${pageNumber * 10 - 10}&limit=${10}`
    );
    const data = await result.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };
  const handlePageNumberChange = (newPageNumber: number) => {
    console.log(newPageNumber);
    if (newPageNumber - 1 >= 0 && newPageNumber <= totalPages)
      setPageNumber(newPageNumber);
  };
  console.log(pageNumber);

  useEffect(() => {
    fetchProducts();
  }, [pageNumber]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Frontend based pagination */}
        {/* {products.length > 0 &&
          products
            .slice(pageNumber * 10 - 10, pageNumber * 10)
            .map((product) => <ProductCard product={product} />)} */}

        {/* Backend driven approach */}
        {products.length > 0 &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
      <Pagination
        pageNumber={pageNumber}
        handlePageNumberChange={handlePageNumberChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default ProductsListing;
