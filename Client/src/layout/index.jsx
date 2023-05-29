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
      <div className={` transition-all duration-300 ease-linear  ${open ? 'z-[999] fixed top-0 bottom-0 left-0 right-0 w-full' : ''}`}>
        <RightDrawer closeDrawer={closeDrawer} open={open}/>
      </div>
      {/* <Cart closeDrawer={closeDrawer}/> */}
      <Header openDrawer={openDrawer}/>
      <Outlet />
      <Footer />  
    </>
  );
}

export { LayoutIndex, Header, Footer };
