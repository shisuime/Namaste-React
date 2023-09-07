import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Headercomponent from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { MyProvider } from "./src/components/Context";



const Applayout = () => {
  return (
    <>
    
      <Headercomponent />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<MyProvider><Applayout/></MyProvider>,
  errorElement:<Error />,
  children:[
    {
      path:"/",
      element:<Body />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/cart",
      element:<Cart />
    },
    {
      path:"/restaurant/:restaurantId",
      element:<RestaurantMenu />
    }
    
  ]
  },
 
]);

const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render(<RouterProvider router={appRouter}/>);
