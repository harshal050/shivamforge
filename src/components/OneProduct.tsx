import { useParams, useNavigate,useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "@/models/types";

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category")


  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://shivamforge-backend.onrender.com//products/${id}`);
      const data = await res.json();
      setProduct(data);
      setCategoryName(data.category);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white dark:bg-neutral-900">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-4 border-blue-900 dark:border-blue-300 border-t-transparent animate-spin"></div>
          </div>

          {/* Loading Text */}
          <p className="text-blue-900 dark:text-blue-300 text-lg font-medium tracking-wide animate-pulse">
            Loading...
          </p>
        </div>
      </div>

    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl hover:shadow-blue-100 dark:hover:shadow-blue-900 transition-shadow duration-500 ease-in-out transform hover:scale-[1.01] flex flex-col md:flex-row overflow-hidden">

        {/* Image Section */}
        <div className="md:w-1/2 w-full h-72 md:h-auto overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-3xl md:rounded-t-none md:rounded-l-3xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300">
            {product.name}
          </h1>

          <span className="text-sm font-medium text-blue-800 dark:text-blue-400 uppercase tracking-widest">
            Category: {categoryName}
          </span>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-2 bg-blue-900 text-white rounded-xl shadow hover:shadow-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Enquiry Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
