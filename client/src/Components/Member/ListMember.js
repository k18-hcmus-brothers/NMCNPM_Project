import { func } from 'prop-types';
import React, { useState, useEffect } from 'react';
import ListMemberItem from './ListMemberItem';

import axios from 'axios';

import server from '../../server';

import '../../Styles/Member.css';

function ListMember() {
  const [listMember, setListMember] = useState([]);
  const [expand, setExpand] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [roles, setRoles] = useState([]); // để select vai trò nhân viên

  useEffect(() => {
    const fetchMemberData = async () => {
      const result = await axios(
        server + '/member/members'
      );
      setListMember(result.data);
    };
    fetchMemberData();

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
  };


  const handleDelete = (e) => {
    console.log("<<DELETE>>", e.target)

  };

  const addMember = (newMember) => {
    console.log(newMember);
  };

  const updateMember = (member) => {
    console.log(member);
  };

  function renderAddForm(e) {
    return (
      <ListMemberItem addRow={true} cancleAddForm={() => setShowAddForm(false)} addMember={addMember} roles={roles}/>
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
              {listMember.map((member) => {
                return <ListMemberItem member={member} key={member.MaNV} roles={roles}/>
              })}
              {showAddForm
                ? renderAddForm()
                : <tr><button onClick={() => setShowAddForm(true)}>Add Item</button></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListMember
