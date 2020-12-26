import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import NotFound from "./components/NotFound";

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
    path: "",
    exact: false,
    main: () => <NotFound />,
    /** mặc định khi không tìm thấy URL tương ứng  */
  },
];

export default routes;
