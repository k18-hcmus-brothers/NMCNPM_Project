import React, { useState } from "react";
const MAX_SAFE_INTEGER=2147483647;
function ServiceItems(props) {
  const [disabled, setDisabled] = useState(true);
  const [serviceDetail, setServiceDetail] = useState(props.Service);
  if (!serviceDetail) {
    setServiceDetail({MaDV: " ",TenDV:" ",GiaDV:" "});
  }
 
 const handleUpdate= async(e)=> {
    e.preventDefault();
    console.log("<<Update>>",serviceDetail);
    await props.updateService(serviceDetail);
    setDisabled(!disabled);
  }
  const handleUpdateItem = async(e) =>
  {
    setDisabled(!disabled);
    const value = e.target.title;
    const name =e.target.name;
    setServiceDetail(prevState => {
      const detail = {...prevState};
      detail[name]=value;
      return detail;
    });
  }
  const handleDetele= async(e) =>
  {
    await props.onDeleteItem(e);
  }
  const handleDeleteItem = async(e) =>{
    
    console.log("<<ED>",serviceDetail);
    
    
    const value = e.target.title;
    const name =e.target.name;
    setServiceDetail(currentState => {
      const detail = {...currentState};
      detail[name]=value;
      handleDetele(detail);
    });
   
  }
  const onInputChange = (e) => {
    
    const name = e.target.name;
    const value = e.target.value;
    if(value>MAX_SAFE_INTEGER)
    {
      if (window.confirm('Giá tiền sản phẩm vướt quá mức cho phép yêu cầu nhập lại')) {
        props.cancleAddForm();
        return;
      }
    }
    setServiceDetail(prevState => {
      const detail = {...prevState};
      detail[name]=value;
      return detail;
    });
    
  };
  return (
    <tr class="service-tr">
      <td>
        <input
          type="text"
          className="service-input"
          disabled={disabled ? "disabled" : ""}
          placeholder={props.name}
          name="TenDV"
          onChange={onInputChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className="service-input"
          disabled={disabled ? "disabled" : ""}
          name="GiaDV"
          placeholder={props.price}
          onChange={onInputChange}
        ></input>
        
      </td>
      <td>VNĐ</td>
      <td>
      {disabled ? <input type="button" name="MaDV" title={props.id} value="Chỉnh sửa" className="btn btn-success EditBtn" onClick={handleUpdateItem} ></input>:  <button className="btn btn-success EditBtn"  onClick={handleUpdate}>Lưu</button>}
        
      {disabled ? <input type="button"  class="btn btn-danger"  name="MaDV" title={props.id}  value="Xoá" onClick={handleDeleteItem}></input> : <button class="btn btn-danger" title="Remove Item" >Hủy bỏ</button> }
      </td>
    </tr>
  );
}

export default ServiceItems;
