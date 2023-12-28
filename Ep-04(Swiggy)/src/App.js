import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import Main from "./components/Main";
import Test from "./components/Test";
// import About from "./components/About";
// import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import ContactUsClass from "./components/class/ContactUsClass";

const About = lazy(() => {
  return import("./components/About");
});

const ContactUs = lazy(() => import("./components/ContactUs"));

const AppCom = () => {
  return (
    <div className="main">
      {/* this nav components always present in every components */}
      <Header />
      {/* here we will render components according to the router using OutLet */}
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppCom />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

const appRoute1 = createBrowserRouter([
  {
    path: "/",
    element: <AppCom />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading..</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        // element: <ContactUs name={"Manash"} />,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ContactUs name={"Manash Jyoti Handique"} />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu sendata1="data1" sendata2="data2" />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(<AppCom />);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoute1} />
);
