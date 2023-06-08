import { Route, Routes } from "react-router-dom";

import { Home, NotFound, SignUp, Login, Shop, AddProduct, CheckOut, MyOrder } from "../Pages";
import { LayoutIndex } from "../layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LayoutIndex />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="checkout" element={<CheckOut/>}/>
        <Route path="myorder" element={<MyOrder/>}/>
      </Route>

      
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default Routing;
