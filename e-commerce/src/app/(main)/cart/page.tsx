"use client";

import { Product, useCart } from "@/components/providers/CartProvider";
import Link from "next/link";

const Page = () => {
  const {
    cart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCart();

  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col gap-4">
        Cart <Link href="/products">Go to product</Link>
        {cart.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex flex-col gap-2 w-[300px] bg-gray-300 p-4 rounded-md"
          >
            <div className="text-2xl">{product.name}</div>
            <div className="text-sm">Price: {product.price}</div>
            <div className="flex justify-between items-center">
              <div className="text-sm">Quantity: {quantity}</div>

              <div className="flex gap-2">
                <button
                  onClick={() => increaseProductQuantity(product)}
                  className="bg-blue-500 text-white rounded p-2"
                >
                  +
                </button>
                <button
                  onClick={() => decreaseProductQuantity(product)}
                  className="bg-blue-500 text-white rounded p-2"
                >
                  -
                </button>
              </div>
            </div>
            <button
              onClick={() => removeProductFromCart(product)}
              className="bg-blue-500 text-white rounded p-2"
            >
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
