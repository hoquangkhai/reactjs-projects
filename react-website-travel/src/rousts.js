import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/service",
    exact: false,
    main: () => <Services />,
  },
  {
    path: "/products",
    exact: false,
    main: ({ match, location }) => (
      <Products match={match} location={location} />
    ),
  },
  {
    path: "/login",
    exact: false,
    main: ({ location }) => <Login location={location} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
    /** mặc định khi không tìm thấy URL tương ứng  */
  },
];

export default routes;
