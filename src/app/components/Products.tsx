// pages/products.tsx
"use client";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Image from "next/image";

type Product = {
  product_id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching:", error);
      } else {
        setProducts(data as Product[]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <ul className="text-gray-700">
        {products.map((p) => (
          <li key={p.product_id}>
            <p>{p.name}</p>
            <p>{p.price.toFixed(2)}</p>
            <p>{p.description}</p>
            
            <Image
              src={p.image_url} // Assuming images are named by product_id
              alt={p.name}
              width={100}
              height={100}
              className="inline-block ml-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
