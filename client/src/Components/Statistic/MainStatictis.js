import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
     <div className="content-box">
         <h1>HELOOO</h1>
     </div>

    </div>
  )
}

export default MainStatictis
