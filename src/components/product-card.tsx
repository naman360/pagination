import { Product } from "./products-listing";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(220,220,220)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <img src={product.images[0]} width="200px" height="200px" alt="" />
      <span>{product.title}</span>
    </div>
  );
};

export default ProductCard;
