import { CartProvider } from "@/components/providers/CartProvider";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Layout;
