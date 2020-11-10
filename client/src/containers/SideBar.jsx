import SideBarItem from "../components/SideBarItem";
import "w3-css/w3.css";
import React, { useState } from "react";

const SideBar = () => {
  const [items, setItem] = useState([
    {
      name: "Tình trạng phòng",
      link: "/",
      isActive: true,
    },
    {
      name: "Thống kê",
      link: "/about",
      isActive: false,
    },
    {
      name: "Quản lý",
      link: "/about",
      isActive: false,
    },
  ]);

  return (
    <div className="w3-sidebar w3-bar-block bg-dark shadow SideBar">
      {items.map((item, i) => (
        <SideBarItem key={i} item={item} />
      ))}
    </div>
  );
};

export default SideBar;
