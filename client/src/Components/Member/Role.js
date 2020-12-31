import React, { useState, useEffect } from 'react'
import RoleItem from './RoleItem'
import axios from 'axios';

import server from '../../server';

import '../../Styles/Member.css';

function Role() {

  const [roles, setRoles] = useState([]);
  const [expand, setExpand] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  // eslint-disable-next-line
  

  useEffect(() => {
    const fetchRoleData = async () => {
      const result = await axios(
        server + '/member/roles'
      );
      setRoles(result.data);
    };
    fetchRoleData();
  }, []);

  const handleExpand = (e) => {
    e.preventDefault()
    setExpand(!expand)
  }


  const handleDelete = (e) =>{
    console.log("<<DELETE>>", e.target)

  }

  const addRole = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  const updateRole = (role) => {
    console.log(role);
  }



  function renderAddForm(e) {
    return (
      <RoleItem addRow={true} cancleAddForm={() => setShowAddForm(false)} addRole={addRole} />
    );
  }

  return (
    <div>
      <div className="content-box">
        <div>
          <span>Danh sách vai trò</span>
          <button href="#" onClick={handleExpand}>-</button>
        </div>
        <div className={"collapse " + (expand ? "show" : "")}>
          <form id="form-role" onSubmit={addRole}>
            <table className="table table-hover table-borderless">
              <thead className="member-thead">
                <tr>
                  <th scope="col">Tên vai trò</th>
                  <th scope="col">Đặt/Huỷ phòng</th>
                  <th scope="col">Đặt/Huỷ dịch vụ</th>
                  <th scope="col">Thêm/Xoá phòng</th>
                  <th scope="col">Thêm/Xoá dịch vụ</th>
                  <th scope="col">Thêm/Xoá nhân viên</th>
                  <th scope="col">Xem/Xuất báo cáo</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>

              <tbody className="member-tbody">
                {roles.map((role) => {
                  return <RoleItem key={role.mavaitro} name={role.mavaitro} role={role} onDeleteItem={handleDelete} updateRole={updateRole}/>
                })}

                {showAddForm
                  ? renderAddForm()
                  : <tr><button onClick={() => setShowAddForm(true)}>Add Item</button></tr>}
              </tbody>
            </table>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Role
