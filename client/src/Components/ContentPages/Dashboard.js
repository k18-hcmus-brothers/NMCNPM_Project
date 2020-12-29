import React from "react";

import RoomSelectorList from "../dashboard/RoomSelectorList";
import Navigation from "../Navigation";
import "../../Styles/Dashboard.scss";

function Dashboard() {
  return (
    <div>
      <Navigation title="Dashboard" />
      <RoomSelectorList />
    </div>
  );
}

export default Dashboard;
