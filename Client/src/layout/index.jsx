import Header from "../common/navbar";
import Footer from "../common/footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import RightDrawer from "../components/ShopCart/RightDrawer";
function LayoutIndex() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <RightDrawer closeDrawer={closeDrawer} open={open}/>
      {/* <Cart closeDrawer={closeDrawer}/> */}
      <Header openDrawer={openDrawer}/>
      <Outlet />
      <Footer />  
    </>
  );
}

export { LayoutIndex, Header, Footer };
