import "w3-css/w3.css";
import React, { useState } from "react";
import SideBarListItem from "../components/SideBarListItem";
import {
  faCalendar,
  faWindowRestore,
  faDatabase,
  faAddressBook,
  faHotel,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    name: "Tình trạng phòng",
    link: "/room-booking",
    icon: faCalendar,
    isActive: true,
  },
  {
    id: 2,
    name: "Thống kê",
    link: "/statistics",
    icon: faWindowRestore,
    isActive: false,
  },
  {
    id: 3,
    name: "Quản lý",
    link: "",
    icon: faDatabase,
    isActive: false,
    subItems: [
      {
        id: 4,
        name: "Nhân viên",
        link: "/employee",
        icon: faAddressBook,
        isActive: false,
      },
      {
        id: 5,
        name: "Phòng",
        link: "/room-management",
        icon: faHotel,
        isActive: false,
      },
      {
        id: 6,
        name: "Dịch vụ",
        link: "/services",
        icon: faShoppingBasket,
        isActive: false,
      },
    ],
  },
];

const findItem = (arr, cmp) => {
  for (let e of arr) {
    if (cmp(e)) return e;

    if (e.subItems !== undefined) {
      const res = findItem(e.subItems, cmp);
      if (res !== null) return res;
    }
  }

  return null;
};

const SideBar = () => {
  const [items, setItem] = useState(data);

  const handleActiveItem = (item) => {
    let newItems = [...items];

    const isActive = (e) => e.isActive;
    const findCurItem = (e) => e.id === item.id;
    let prevItem = findItem(newItems, isActive);
    let curItem = findItem(newItems, findCurItem);

    prevItem.isActive = false;
    curItem.isActive = true;

    setItem(newItems);
  };

  return (
    <div className="w3-sidebar w3-bar-block bg-dark shadow SideBar">
      <SideBarListItem items={items} onActive={handleActiveItem} />
    </div>
  );
};

export default SideBar;
