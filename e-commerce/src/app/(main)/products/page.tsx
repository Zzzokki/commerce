"use client";

import { Product, useCart } from "@/components/providers/CartProvider";
import Link from "next/link";

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
  },
];

const Page = () => {
  const { addProductToCart } = useCart();

  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col gap-4">
        Products <Link href="/cart">Go to cart</Link>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="flex flex-col gap-2 w-[300px] bg-gray-300 p-4 rounded-md">
              <div className="text-2xl">{product.name}</div>
              <div className="text-sm">Price: {product.price}</div>
              <button
                onClick={() => addProductToCart(product)}
                className="bg-blue-500 text-white rounded p-2"
              >
                Add to cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
