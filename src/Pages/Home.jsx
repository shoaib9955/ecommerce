import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../services/productAPI";
import ProductCard from "../components/ProductCards";

const Home = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchCategories().then(setCategories);
  }, []);

  const filteredAndSorted = products
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const categoryMatch =
        selectedOption === "all" ||
        categories.some(
          (cat) =>
            cat.slug === selectedOption && product.category === selectedOption
        );

      return matchesSearch && categoryMatch;
    })
    .sort((a, b) => {
      switch (selectedOption) {
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        case "nameAZ":
          return a.title.localeCompare(b.title);
        case "nameZA":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-400 p-6 mt-5">
      <div className="max-w-7xl mx-auto bg-pink-200/20 backdrop-blur-lg border border-pink-400/30 rounded-2xl shadow-2xl p-6 text-pink-900">
        <h1 className="text-4xl font-extrabold mb-6 text-red-600 text-center drop-shadow-md">
          Explore Products
        </h1>

        {/* Unified Filter & Sort Dropdown */}
        <div className="flex justify-center mb-8">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="bg-white/30 text-lg text-indigo-800 font-medium px-4 py-2 rounded-md focus:outline-none w-full max-w-xs shadow-md"
          >
            <option value="all">All Products</option>

            <optgroup label="Sort By">
              <option value="priceLowHigh">Price: Low → High</option>
              <option value="priceHighLow">Price: High → Low</option>
              <option value="nameAZ">Name: A → Z</option>
              <option value="nameZA">Name: Z → A</option>
            </optgroup>

            <optgroup label="Filter by Category">
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Product Grid */}
        {filteredAndSorted.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredAndSorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-white text-lg mt-8">
            😔 No products found matching your filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
