import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Products from "./routes/products/products.component";
import Register from "./routes/register/register.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
