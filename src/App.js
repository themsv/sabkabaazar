import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import CategoryProducts from "./routes/category-products/category-products.component";
import Register from "./routes/register/register.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="products/*" element={<CategoryProducts />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
