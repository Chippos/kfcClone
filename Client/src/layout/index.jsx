import Header from "../common/navbar";
import Footer from "../common/footer";
import { Outlet } from "react-router-dom";

function LayoutIndex() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />  
    </>
  );
}

export { LayoutIndex, Header, Footer };
