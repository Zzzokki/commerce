"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
};

type CartProduct = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cart: CartProduct[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  increaseProductQuantity: (product: Product) => void;
  decreaseProductQuantity: (product: Product) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartProduct[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const addProductToCart = (product: Product) => {
    const existingProduct = cart.find((p) => p.product.id === product.id);

    if (existingProduct) {
      increaseProductQuantity(product);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeProductFromCart = (product: Product) => {
    setCart(cart.filter((p) => p.product.id !== product.id));
  };

  const increaseProductQuantity = (product: Product) => {
    setCart(
      cart.map((p) =>
        p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseProductQuantity = (product: Product) => {
    const existingProduct = cart.find((p) => p.product.id === product.id);

    if (existingProduct?.quantity === 1) {
      removeProductFromCart(product);
    } else {
      setCart(
        cart.map((p) =>
          p.product.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
