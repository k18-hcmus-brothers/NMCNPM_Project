import React, { useState, useEffect } from 'react'
function ListMember() {
  const [expand, setExpand] = useState(true);
  function handleExpand(e) {
    e.preventDefault()
    setExpand(!expand)
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
                <th scope="col">Mật khẩu</th>
                <th scope="col">Vai trò</th>
                <th scope="col">SĐT</th>
              </tr>
            </thead>

            <tbody className="member-tbody">
              
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default ListMember
