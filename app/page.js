"use client";
import { useEffect, useState } from 'react';
import { ScaleLoader    } from 'react-spinners';

export default function Home() {
  const [products, setProducts] = useState({ products: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/posts');
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);



  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
      <ScaleLoader color={'#FF4500'} loading={loading} height={50} width={7}  radius={10} margin={5} />
      </div>
    );
  }

  if (!products.products || products.products.length === 0) {
    return <div>No products found.</div>; // or any loading indicator/message you prefer
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:justify-between">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.products.map((product) => (
          <a
            key={product._id}
            href={`/product/${product._id}`}
            className="group overflow-hidden bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 block mb-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-40 md:h-56"
            />
  
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-700">
                {product.description.slice(0, 10)} ...
              </p>
              <div className="mt-4">
                <span className="text-lg font-bold text-red-500">
                  {product.price}₼
                </span>
                <a
                  href={`/buy/${product._id}`}
                  className="block mt-2 w-full px-6 py-3 bg-green-500 text-white rounded-md focus:outline-none transition-transform transform hover:scale-105"
                >
                  Sifariş Et
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
