import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.images?.[0]} // Use first image from DummyJSON's array
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="text-md font-semibold">
        {product.title.length > 30
          ? product.title.slice(0, 30) + "..."
          : product.title}
      </h3>
      <p className="text-sm text-gray-700">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="text-blue-600 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
