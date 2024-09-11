import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div>Admin layout</div>
      {children}
    </>
  );
};

export default Layout;
