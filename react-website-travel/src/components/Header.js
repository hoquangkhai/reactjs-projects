import React from "react";
import { Route, Link } from "react-router-dom";

//quản lý menu phòng trường hợp lấy menu từ Sever

const headerMenus = [
  {
    label: "Home",
    to: "/",
    activeOnlyWhenExact: true,
  },
  {
    label: "Abouts",
    to: "/about",
    activeOnlyWhenExact: false,
  },
  {
    label: "Contacts",
    to: "/contact",
    activeOnlyWhenExact: false,
  },
  {
    label: "Services",
    to: "/service",
    activeOnlyWhenExact: false,
  },
  {
    label: "Login",
    to: "/login",
    activeOnlyWhenExact: false,
  },
  {
    label: "Products",
    to: "/products",
    activeOnlyWhenExact: true,
  },
];

// customLink
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={`${active} nextClass`}>
            <Link to={to} className="navbar__link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

const showMenus = (menus) => {
  let result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          to={menu.to}
          activeOnlyWhenExact={menu.activeOnlyWhenExact}
          label={menu.label}
          key={index}
        />
      );
    });
  }
  return result;
};

function Header() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <ul className="navbar__items">
          {showMenus(headerMenus)}
          {/* <MenuLink to="/" activeOnlyWhenExact={true} label="Home" />
          <MenuLink to="/about" activeOnlyWhenExact={false} label="About" />
          <MenuLink
            to="/contact"
            activeOnlyWhenExact={false}
            label="Contacts"
          />
          <MenuLink
            to="/service"
            activeOnlyWhenExact={false}
            label="Services"
          /> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
