import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StatictisBox from './StatisticBox'
import ChartsPage from './ChartsPage'
import CustomerList from './CustomerList'
import server from '../../server'

import '../../Styles/Statistics.css'

function MainStatictis() {

  const [statistic, setStatistic] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchServiceData = async () => {
    const result = await axios(server + "/statistic/");
    console.log("<<DATA::>",result.data);
    setStatistic(result.data);
  };

  useEffect(() => {
    
    fetchServiceData();
  }, []);

 

  return (
    <div>
        <div className="box-margin">
        <StatictisBox price={statistic.TongTien} guest={statistic.TongKhach} room={statistic.TongPhong}/>
        </div>
        
        <div className="content-box box-margin">
        <ChartsPage/>
        </div>
        <div className="box-margin">
          <h2>Danh sách khách hàng</h2>
        </div>
        <div className="content-box">
          <CustomerList/>
        </div>

        
       

    </div>
  )
}

export default MainStatictis
