import React, { useState } from "react";
import { FaBan, FaEdit } from "react-icons/fa";

function ServiceItems(props) {
  const [disabled, setDisabled] = useState(true);

  function handleUpdate(e) {
    e.preventDefault();
    setDisabled(!disabled);
  }

  function handleDeleteItem(e) {
    e.preventDefault();
    if (window.confirm("delete the item?")) {
      props.onDeleteItem(e);
    }
  }

  return (
    <tr class="service-tr">
      <td>
        <input
          type="text"
          className="service-input"
          disabled={disabled ? "disabled" : ""}
          placeholder={props.name}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className="service-input"
          disabled={disabled ? "disabled" : ""}
          placeholder={props.price}
        ></input>
      </td>
      <td>VNĐ</td>
      <td>
        <button className="btn btn-success EditBtn" onClick={handleUpdate}>
         
          {disabled ? <FaEdit /> : "Lưu"}
        </button>
        <button class="btn btn-danger" title="Remove Item">
        {disabled ? <FaBan /> : "Hủy bỏ"}
        </button>
      </td>
    </tr>
  );
}

export default ServiceItems;
