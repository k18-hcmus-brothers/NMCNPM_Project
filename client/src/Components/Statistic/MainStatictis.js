import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StatictisBox from './StatisticBox'
import ChartsPage from './ChartsPage'
import CustomerList from './CustomerList'
import server from '../../server'

import '../../Styles/Statistics.css'

function MainStatictis() {

  const [roles, setRoles] = useState([])

  const [expand, setExpand] = useState(true)

  // eslint-disable-next-line
  useEffect(async () => {
    const result = await axios(
      server + '/member/'
    )
    // console.log("<<Role.js useEffect>>", result.data)

    setRoles(result.data)
  }, []);

  function handleExpand(e) {
    e.preventDefault()
    setExpand(!expand)
  }

  function handleCheckboxChange(e) {
    const name = e.target.getAttribute("name")
    const index = e.target.getAttribute("index")
    setRoles(prevState => {
      let roleItems = [...prevState]
      // console.log(roleItems[index][name])
      roleItems[index][name] = !roleItems[index][name]
      return roleItems;
    })
  }

  function handleDelete(e) {
    console.log("<<DELETE>>", e.target)

  }

  return (
    <div>
        <div className="box-margin">
        <StatictisBox/>
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
