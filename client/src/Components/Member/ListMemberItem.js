import React, { useState } from 'react'

function ListMemberItem() {
  const [disabled, setDisabled] = useState(true)

  function handleUpdate(e) {
    e.preventDefault()
    setDisabled(!disabled)
  }

  return (
    <div>
      <tr className="member-tr">

        <td>
          <input type="text" className="member-input" disabled={disabled ? "disabled" : ""}></input>
        </td>
        <td>
          <input type="text" className="member-input" disabled={disabled ? "disabled" : ""}></input>
        </td>
      <td>
        <select className="member-input" disabled={disabled ? "disabled" : ""}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
      </td>
          
        <td>
          <input type="text" className="member-input" disabled={disabled ? "disabled" : ""}></input>
        </td>

        <td>
          <button className="btn btn-primary" onClick={handleUpdate}> {disabled ? "Update" : "Save"} </button>
          <button className="btn btn-primary" > Xoá </button>
        </td>
      </tr>
    </div>
  )
}

export default ListMemberItem