export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();
  return data.products; // ✅ return only the products array
};

export const fetchCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  return res.json();
};
