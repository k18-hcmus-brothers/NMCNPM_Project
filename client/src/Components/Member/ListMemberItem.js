import React, { useState } from 'react'

function ListMemberItem(props) {
  const [disabled, setDisabled] = useState(true);
  const [memberDetail, setMemberDetail] = useState(props.member);
  // console.log(props.roles);
  const handleUpdate = (e) => {
    e.preventDefault()
    setDisabled(!disabled)
  };

  const onInputChange = (e) => {

  };

  const RenderExistItem = () => {
    return (
      <tr className="member-tr">
        <td>
          <input type="text" name="tennhanvien" value={memberDetail.TenNV} onChange={onInputChange} disabled={disabled ? "disabled" : ""} className="member-input" />
        </td>
        <td>
          <input type="text" name="tendangnhap" value={memberDetail.TenDangNhap} onChange={onInputChange} disabled={disabled ? "disabled" : ""} className="member-input" />
        </td>
        <td>
          <select className="member-input" disabled={disabled ? "disabled" : ""}>
            {props.roles.map((role) => {
              return <option key={role.mavaitro} value={role.mavaitro} selected={memberDetail.MaVaiTro === role.mavaitro}>{role.tenvaitro}</option>
            })}
          </select>
        </td>
        <td>
          <input type="text" name="sdt" value={memberDetail.SDT} onChange={onInputChange} disabled={disabled ? "disabled" : ""} className="member-input" />
        </td>
        <td>
          <button className="btn btn-primary" form="form-role" onClick={handleUpdate}> {disabled ? "Update" : "Save"} </button>
          <button className="btn btn-primary" > Xoá </button>
        </td>
      </tr>
    )
  };

  const RenderAddNewItem = () => {
    return (
      <tr className="member-tr">
        <td>
          <input type="text" name="tennhanvien" onChange={onInputChange} className="member-input" />
        </td>
        <td>
          <input type="text" name="tendangnhap" onChange={onInputChange} className="member-input" />
        </td>
        <td>
          <select className="member-input">
            {props.roles.map((role) => {
              return <option value={role.mavaitro}>{role.tenvaitro}</option>
            })}
          </select>
        </td>
        <td>
          <input type="text" name="sdt" onChange={onInputChange} className="member-input" />
        </td>
        <td>
          <button form="form-role" className="btn btn-primary"> Lưu </button>
          <button className="btn btn-primary" onClick={props.cancleAddForm} > Huỷ </button>
        </td>
      </tr>
    );
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

export default ListMemberItem