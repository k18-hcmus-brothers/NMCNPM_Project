import React, { useState, useEffect } from "react"
import { Route, Link } from 'react-router-dom'
import '../../Styles/Services.css'
import ServiceItems from './ServiceItems'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
const MAX_SAFE_INTEGER=2147483647;
function InputItem(props) {
  const [disabled, setDisabled] = useState(true);
  const [serviceDetail, setServiceDetail] = useState(props.Service);
  if (!serviceDetail) {
    setServiceDetail({TenDV: " ",GiaDV:" " });
  }
  const handleAddItem = async (e) => {
    e.preventDefault();
    await props.addService(serviceDetail);
    props.cancleAddForm();
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
    console.log("<deq>",serviceDetail)
  };
  return (

      <>

           
    <tr class="service-tr">
      <td>
        
      <input type="text"  class="form-control" name="TenDV" aria-describedby="helpId"  onChange={onInputChange} />
     
     </td>
      <td><input type="interger" class="form-control" name="GiaDV"  aria-describedby="helpId" onChange={onInputChange}/></td>
      <td>VNĐ</td>
      <td>
      <button className="btn btn-success EditBtn" onClick={handleAddItem}>
         Lưu
        
       </button>
       <button class="btn btn-danger" title="Remove Item" onClick={props.cancleAddForm}>
        Hủy bỏ
       </button>
      </td>
    </tr>
            
          
      
        
        
 
  
    </>
  );
}

export default InputItem;
