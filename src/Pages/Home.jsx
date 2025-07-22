import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../services/productAPI";
import ProductCard from "../components/ProductCards";

const Home = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchCategories().then(setCategories);
  }, []);

  const filtered = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Products</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`capitalize px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
              selectedCategory === cat.slug
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No products found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default Home;
