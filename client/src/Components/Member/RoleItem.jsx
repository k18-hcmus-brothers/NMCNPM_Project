import { func } from 'prop-types';
import React, { useState } from 'react'

function RoleItem(props) {

  const [disabled, setDisabled] = useState(true);
  const [roleDetail, setRoleDetail] = useState(props.role);

  if (!roleDetail) {
    setRoleDetail({tenvaitro: "", dathuyphong: false, dathuydichvu: false, themxoaphong: false, themxoadichvu: false, themxoanhanvien: false, xemxuatbaocao: false});
  }

  const onCheckboxChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setRoleDetail(prevState => {
      const f = {...prevState};
      f[name] = checked;
      return f;
    })
  }

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRoleDetail(prevState => {
      const f = {...prevState};
      f[name]=value;
      return f;
    });
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    // when disabled is false, the button will be "save" => call updateRole
    if (!disabled) {
      props.updateRole(roleDetail);
    }
    setDisabled(!disabled);
  }

  const handleDeleteItem = (e) => {
    e.preventDefault();
    if (window.confirm('delete the item?')) {
      props.onDeleteItem(e)
    }
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    props.addRole(roleDetail);
  }

  const RenderExistItem = () => {
    return (
      <tr className="member-tr">
        <td>
          <input type="text" name="tenvaitro" value={roleDetail.tenvaitro} onChange={onInputChange} disabled={disabled ? "disabled" : ""} className="member-input"/>
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="dathuyphong" onChange={onCheckboxChange}
            type="checkbox" checked={roleDetail.dathuyphong ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="dathuydichvu" onChange={onCheckboxChange}
            type="checkbox" checked={roleDetail.dathuydichvu ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="themxoaphong" onChange={onCheckboxChange}
            type="checkbox" checked={roleDetail.themxoaphong ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="themxoadichvu" onChange={onCheckboxChange}
            type="checkbox" checked={roleDetail.themxoadichvu ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="themxoanhanvien" onChange={onCheckboxChange}
            type="checkbox" checked={roleDetail.themxoanhanvien ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <input form="form-role" index={props.role.id} name="xemxuatbaocao" onChange={onCheckboxChange}
            type="checkbox" checked={roleDetail.xemxuatbaocao ? "checked" : ""} disabled={disabled ? "disabled" : ""} />
        </td>
        <td>
          <button className="btn btn-sm btn-success EditBtn" form="form-role" type="button"> {disabled ? "Chỉnh sửa" : "Lưu"} </button>
          <button className="btn btn-sm btn-danger" index={props.role.id} type="button"> Xoá </button>
        </td>
      </tr>
    )
  };

  const RenderAddNewItem = () => {
    return (
      <>
        <tr className="member-tr">
          <td>
            <input form="form-role" name="tenvaitro" type="text" className="member-input" onChange={onInputChange}/>
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
            <button form="form-role" className="btn btn-sm btn-success EditBtn" type="submit" onClick={handleAddItem} > Lưu </button>
            <button className="btn btn-sm btn-danger" onClick={props.cancleAddForm} > Huỷ </button>
          </td>
        </tr>
      </>
    )
  };

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
