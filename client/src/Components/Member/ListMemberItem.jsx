import React, { useState } from 'react'

function ListMemberItem(props) {
  const [disabled, setDisabled] = useState(true);
  const [memberDetail, setMemberDetail] = useState(props.member);

  if (!memberDetail) {
    setMemberDetail({TenNV: "", TenDangNhap: "", MaVaiTro: "1", SDT: "", })
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!disabled) {
    }
    setDisabled(!disabled);
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    await props.addMember(memberDetail);
    props.cancleAddForm();
  }

  const handleDeleteItem = async (e) => {
    e.preventDefault();
    // send delete request
    if (window.confirm('delete the item?')) {
      await props.deleteMember(e);
    }
  }

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMemberDetail(prevState => {
      const detail = {...prevState};
      detail[name]=value;
      return detail;
    });
  };

  const RenderExistItem = () => {
    return (
      <tr className="member-tr">
        <td>
          <input type="text" name="TenNV" value={memberDetail.TenNV} onChange={onInputChange} disabled={disabled ? "disabled" : ""} className="member-input" />
        </td>
        <td>
          <input type="text" name="TenDangNhap" value={memberDetail.TenDangNhap} onChange={onInputChange} disabled={disabled ? "disabled" : ""} className="member-input" />
        </td>
        <td>
          <select name="MaVaiTro" className="member-input" disabled={disabled ? "disabled" : ""} value={memberDetail.MaVaiTro} onChange={onInputChange}>
            {props.roles.map((role) => {
              return <option key={role.mavaitro} value={role.mavaitro} >{role.tenvaitro}</option>
            })}
          </select>
        </td>
        <td>
          <input type="text" name="SDT" value={memberDetail.SDT} onChange={onInputChange} disabled={disabled ? "disabled" : ""} className="member-input" />
        </td>
        <td>
          <button className="btn btn-primary" form="form-role" onClick={handleUpdate}> {disabled ? "Update" : "Save"} </button>
          <button className="btn btn-primary" value={memberDetail.MaNV} onClick={handleDeleteItem}> Xoá </button>
        </td>
      </tr>
    )
  };

  const RenderAddNewItem = () => {
    return (
      <tr className="member-tr">
        <td>
          <input type="text" name="TenNV" onChange={onInputChange} className="member-input" />
        </td>
        <td>
          <input type="text" name="TenDangNhap" onChange={onInputChange} className="member-input" />
        </td>
        <td>
          <select className="member-input" name="MaVaiTro" onChange={onInputChange} defaultValue="1">
            {props.roles.map((role) => {
              return <option key={role.mavaitro} value={role.mavaitro}>{role.tenvaitro}</option>
            })}
          </select>
        </td>
        <td>
          <input type="text" name="SDT" onChange={onInputChange} className="member-input" />
        </td>
        <td>
          <button form="form-role" className="btn btn-primary" onClick={handleAddItem}> Lưu </button>
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