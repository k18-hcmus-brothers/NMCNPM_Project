import { func } from 'prop-types';
import React, { useState } from 'react'

function RoleItem(props) {

  const [disabled, setDisabled] = useState(true);
  const [functions, setFunctions] = useState(props.role);

  if (!functions) {
    setFunctions({loainhanvien: "", dathuyphong: false, dathuydichvu: false, themxoaphong: false, themxoadichvu: false, themxoanhanvien: false, xemxuatbaocao: false});
  }

  function onCheckboxChange(e) {
    const name = e.target.name;
    const checked = e.target.checked;
    setFunctions(prevState => {
      const f = {...prevState};
      f[name] = checked;
      return f;
    })
  }

  function onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFunctions(prevState => {
      const f = {...prevState};
      f[name]=value;
      return f;
    })
  }

  function handleUpdate(e) {
    e.preventDefault();
    // when disabled is false, the button will be "save" => call updateRole
    if (!disabled) {
      props.updateRole(functions);
    }
    setDisabled(!disabled);
  }

  function handleDeleteItem(e) {
    e.preventDefault()
    if (window.confirm('delete the item?')) {
      props.onDeleteItem(e)
    }
  }

  

  function handleAddItem(e) {
    e.preventDefault();

    props.addRole(functions);
  }



  const RenderExistItem = () => {
    return (
      <tr className="member-tr">
        <td>
          <input type="text" name="loainhanvien" value={functions.loainhanvien} onChange={onInputChange} disabled={disabled ? "disabled" : ""} className="member-input"/>
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="dathuyphong" onChange={onCheckboxChange}
            type="checkbox" checked={functions.dathuyphong ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="dathuydichvu" onChange={onCheckboxChange}
            type="checkbox" checked={functions.dathuydichvu ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="themxoaphong" onChange={onCheckboxChange}
            type="checkbox" checked={functions.themxoaphong ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="themxoadichvu" onChange={onCheckboxChange}
            type="checkbox" checked={functions.themxoadichvu ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="themxoanhanvien" onChange={onCheckboxChange}
            type="checkbox" checked={functions.themxoanhanvien ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="xemxuatbaocao" onChange={onCheckboxChange}
            type="checkbox" checked={functions.xemxuatbaocao ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <button className="btn btn-primary" form="form-role" onClick={handleUpdate}> {disabled ? "Update" : "Save"} </button>
          <button className="btn btn-primary" index={props.role.id} onClick={handleDeleteItem}> Xoá </button>
        </td>
      </tr>
    )
  }

  const RenderAddNewItem = () => {
    return (
      <>
        
        <tr className="member-tr">
          <td>
            <input form="form-role" name="loainhanvien" type="text" className="member-input" onChange={onInputChange}/>
          </td>
          <td>
            <input form="form-role" name="dathuyphong" type="checkbox" onChange={onCheckboxChange}/>
          </td>
          <td>
            <input form="form-role" name="dathuydichvu" type="checkbox" onChange={onCheckboxChange}/>
          </td>
          <td>
            <input form="form-role" name="themxoaphong" type="checkbox" onChange={onCheckboxChange}/>
          </td>
          <td>
            <input form="form-role" name="themxoadichvu" type="checkbox" onChange={onCheckboxChange}/>
          </td>
          <td>
            <input form="form-role" name="themxoanhanvien" type="checkbox" onChange={onCheckboxChange}/>
          </td>
          <td>
            <input form="form-role" name="xemxuatbaocao" type="checkbox" onChange={onCheckboxChange}/>
          </td>
          <td>
            <button form="form-role" className="btn btn-primary" onClick={handleAddItem}> Lưu </button>
            <button className="btn btn-primary" onClick={props.cancleAddForm} > Huỷ </button>
          </td>
        </tr>
      </>
    )
  }

  return (
    <>
      {
        props.addRow
          ? RenderAddNewItem()
          : RenderExistItem()
      }
    </>

  )
}

export default RoleItem
