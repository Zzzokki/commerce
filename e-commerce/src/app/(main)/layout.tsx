import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div>Not Admin layout</div>
      {children}
    </>
  );
};

export default Layout;
