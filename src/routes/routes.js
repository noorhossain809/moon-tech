import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import AddProduct from "../pages/dashboard/AddProduct";
import ProductList from "../pages/dashboard/ProductList";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "cart",
            element: <Cart />
        },
    ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            
            {
                path: "/dashboard",
                element: <ProductList />
            },
            {
                path: "add-product",
                element: <AddProduct />
            },
        ]
    }
    
  ]);
  export default routes;    