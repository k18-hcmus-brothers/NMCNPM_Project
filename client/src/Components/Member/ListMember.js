import { func } from 'prop-types';
import React, { useState, useEffect } from 'react';
import ListMemberItem from './ListMemberItem';

function ListMember() {
  const [listMember, setListMember] = useState([]);
  const [expand, setExpand] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);


  // Dữ liệu giả
  // setListMember([{tenNhanVien: "Nguyen", tenDangNhap: "nguyen31", vaiTro: "", SDT: "0937718415"}]);

  // eslint-disable-next-line
  // Cài đặt database sau
  // const fetchMemberData = async () => {
  //   const result = await axios(
  //     server + '/member/listmember'
  //   );

  //   setListMember(result.data);
  // };

  // useEffect(() => {
  //   fetchMemberData();
  // }, []);

  const handleExpand = (e) => {
    e.preventDefault()
    setExpand(!expand)
  }


  const handleDelete = (e) =>{
    console.log("<<DELETE>>", e.target)

  }

  const addMember = (newMember) => {
    // e.preventDefault();

    // newRole.loainhanvien = e.target.loainhanvien.value;
    console.log(newMember);
  }

  const updateMember = (member) => {
    console.log(member);
  }

  function renderAddForm(e) {
    return (
      <ListMemberItem addRow={true} cancleAddForm={() => setShowAddForm(false)} addMember={addMember} />
    );
  }

  return (
    <>
      <div className="content-box">
        <div>
          <span>Danh sách nhân viên</span>
          <button href="#" onClick={handleExpand}>-</button>
        </div>
        <div className={"collapse " + (expand ? "show" : "")}>
          <table className="table table-hover table-borderless">
            <thead className="member-thead">
              <tr>
                <th scope="col">Tên nhân viên</th>
                <th scope="col">Tên đăng nhập</th>
                <th scope="col">Vai trò</th>
                <th scope="col">SĐT</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>

            <tbody className="member-tbody">
              <ListMemberItem />
              {showAddForm
                  ? renderAddForm()
                  : <button onClick={() => setShowAddForm(true)}>Add Item</button>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListMember
