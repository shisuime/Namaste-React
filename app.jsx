import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

import Headercomponent from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { MyProvider } from "./src/components/Context";
import Profile from "./src/components/Profile";
import Simmer from "./src/components/Simmer";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const Instamart = lazy(() => import("./src/components/Instamart"));
const Applayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <Headercomponent />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};
// <context><app><context>

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <MyProvider>
        <Applayout />
      </MyProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Simmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render(<RouterProvider router={appRouter} />);
