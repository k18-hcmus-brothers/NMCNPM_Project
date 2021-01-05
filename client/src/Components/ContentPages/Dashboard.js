import React from "react";
import RoomSelectorList from "../dashboard/RoomSelectorList";
import Navigation from "../Navigation";
import "../../Styles/Dashboard.scss";
import Sidebar from '../Sidebar';


function Dashboard() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div>
        <Navigation title="Tình trạng phòng" />
        <RoomSelectorList />
      </div>

    </div>
  );
}

export default Dashboard;
