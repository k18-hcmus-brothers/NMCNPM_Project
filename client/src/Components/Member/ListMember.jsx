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
  const [error, setError] = useState(false);

  const fetchMemberData = async () => {
    let accessString = sessionStorage.getItem('JWT');
    if (!accessString) {
      setError(true);
    }
    else {
      try {
        const respone = await axios({
          method: 'get',
          url: server + "/member/members",
          headers: {
            Authorization: `JWT ${accessString}`,
          },
        });

        setListMember(respone.data);
      }
      catch (error) {
        console.error("ERROR " + error);
      }
    }
  };

  const fetchRoleData = async () => {
    const result = await axios(
      server + '/member/roles'
    );
    setRoles(result.data);
  };

  useEffect(() => {
    fetchMemberData();
    fetchRoleData();
  }, []);

  const handleExpand = (e) => {
    e.preventDefault()
    setExpand(!expand)
  };

  const deleteMember = async (e) => {
    const MaNhanVien = e.target.value;
    const data = {
      id: MaNhanVien
    }
    // send delete request
    try {
      await axios.post(server + '/member/delete-member', data);
    }
    catch (error) {
      console.log(error);
    }
    // fetch member agian after delete
    fetchMemberData();
  };

  const addMember = async (newMember) => {
    // console.log(newMember);
    let accessString = sessionStorage.getItem('JWT');
    const respone = await axios({
      method: 'get',
      url: server + "/member/members",
      headers: {
        Authorization: `JWT ${accessString}`,
      },
    });
    const existMembers = respone.data;
    const existUsernames = existMembers.map(member => member.TenDangNhap);
    console.log(existUsernames);
    // check if newMember.TenDangNhap already exist
    if (existUsernames.includes(newMember.TenDangNhap)) {
      alert("Tên đăng nhập đã tồn tại.\n Vui lòng chọn tên đăng nhập khác")
    }
    else {
      try {
        await axios.post(server + '/member/add-member', newMember);
      }
      catch (err) {
        console.log(err);
        return;
      }
      fetchMemberData();
    }
    // console.log("<<AFTER ADD>>", listMember);
  };

  const updateMember = async (member) => {
    console.log(member);
    const respone = await axios.post(server + '/member/update-member', member);
  };

  function renderAddForm(e) {
    return (
      <ListMemberItem addRow={true} cancleAddForm={() => setShowAddForm(false)} addMember={addMember} roles={roles} />
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
                return <ListMemberItem member={member} key={member.MaNV} roles={roles} deleteMember={deleteMember} updateMember={updateMember}/>
              })}
              {showAddForm
                ? renderAddForm()
                : <tr><td><button onClick={() => setShowAddForm(true)}>Add Item</button></td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListMember
