import {
  FaHome,
  FaServer,
  FaRegStickyNote,
  FaStickyNote,
  FaBars,
} from "react-icons/fa";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

// eslint-disable-next-line react/prop-types
function SidebarMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/zabbix-servers",
      name: "Zabbix Servers",
      icon: <FaServer />,
    },
    {
      path: "/reports-servers",
      name: "Reports Servers",
      icon: <FaRegStickyNote />,
    },
    {
      path: "/reports-groups",
      name: "Reports Groups",
      icon: <FaStickyNote />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default SidebarMenu;
