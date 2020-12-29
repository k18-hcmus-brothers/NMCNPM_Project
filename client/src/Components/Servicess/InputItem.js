import React, { useState, useEffect } from "react"
import { Route, Link } from 'react-router-dom'
import '../../Styles/Services.css'
import ServiceItems from './ServiceItems'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
function InputItem(props) {
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
  const Serviecs=[
    {name:"Giặt ủi",price:"50000"},
    {name:"Nước lọc",price:"10000"},
    {name:"BCS",price:"1000000000"},
  ];
  return (

      <>

           
    <tr class="service-tr">
      <td>
        
        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
     
     </td>
      <td><input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" /></td>
      <td>VNĐ</td>
      <td>
        <a
          class="btn btn-sm btn-success EditBtn"
          href="/service"
          role="button"
          title="Edit Item"
        >
        Lưu
        </a>
        <a
          class="btn btn-sm btn-danger"
          href="#"
          role="button"
          title="Remove Item"
        >
          Hủy bỏ
        </a>
      </td>
    </tr>
            
          
      
        
        
 
  
    </>
  );
}

export default InputItem;
