import React from 'react'

import RoomSelector from '../dashboard/RoomSelector'
import Navigation from '../Navigation'
import "../../Styles/Dashboard.scss"

function Dashboard() {
    return (
        <div>
            <Navigation title="Dashboard" />
            <div className="dashboard container-fluid mt-2">
                <RoomSelector/>
            </div>
        </div>
    );
}

export default Dashboard;