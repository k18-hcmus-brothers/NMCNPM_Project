import React, { useState } from 'react'

function RoleItem(props) {

  const [disabled, setDisabled] = useState(true)

  function handleUpdate(e) {
    e.preventDefault()
    setDisabled(!disabled)
  }

  function handleDeleteItem(e) {
    e.preventDefault()
    if (window.confirm('delete the item?')) {
      props.onDeleteItem(e)
    }
  }

  return (
    <tr className="member-tr">
      <td>{props.role.loainhanvien}</td>
      <td>
        <input index={props.role.id} name="dathuyphong" onChange={props.onCheckboxChange} 
        type="checkbox" checked={props.role.dathuyphong ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
      </td>
      <td>
        <input index={props.role.id} name="dathuydichvu" onChange={props.onCheckboxChange} 
        type="checkbox" checked={props.role.dathuydichvu ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
      </td>
      <td>
        <input index={props.role.id} name="themxoaphong" onChange={props.onCheckboxChange} 
        type="checkbox" checked={props.role.themxoaphong ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
      </td>
      <td>
        <input index={props.role.id} name="themxoadichvu" onChange={props.onCheckboxChange} 
        type="checkbox" checked={props.role.themxoadichvu ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
      </td>
      <td>
        <input index={props.role.id} name="themxoanhanvien" onChange={props.onCheckboxChange} 
        type="checkbox" checked={props.role.themxoanhanvien ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
      </td>
      <td>
        <input index={props.role.id} name="xemxuatbaocao" onChange={props.onCheckboxChange} 
        type="checkbox" checked={props.role.xemxuatbaocao ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
      </td>


      <td>
        <button className="btn btn-primary" onClick={handleUpdate}> {disabled ? "Update" : "Save"} </button>
        <button className="btn btn-primary" index={props.role.id} onClick={handleDeleteItem}> Xoá </button>
      </td>

    </tr>
  )
}

export default RoleItem
