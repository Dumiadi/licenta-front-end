import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import Button from "./Button";
import { navItems } from "./NavItems.js";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  // const [servicesDropdown, setServicesDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


// const handleServicesClick = () => {
//   setServicesDropdown(!servicesDropdown);
// };


  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          <Icons.FaCut />
          BarberShop
        </Link>
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <li key={item.id} className={`${item.nName} dropdown-item`} onClick={() => setShowDropdown(!showDropdown)}>
                    <div>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                      <ul className={`dropdown-menu ${showDropdown ? 'active' : ''}`}>
                        {item.dropdown.map(subItem => (
                          <li key={subItem.id}>
                            <Link to={subItem.path}>
                              {subItem.icon}
                              <span>{subItem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={item.id} className={item.nName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        )}
        {!mobile && <Button />}
        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Button onClick={() => setSidebar(false)} />
      </div>
    </>
  );
}

export default Navbar;