import React, { useState } from 'react'
import {FaBox,FaMoneyBillAlt,FaUserAlt} from "react-icons/fa"
function CustomerList(props) {

    const [disabled, setDisabled] = useState(true)
  
    function handleUpdate(e) {
      e.preventDefault()
      setDisabled(!disabled)
    }
  
    function handleDeleteItem(e) {
      e.preventDefault()
      if (window.confirm('delete the item?')) {
        props.onDeleteItem(e)
      }
    }
  
    return (
        <div class="row">
	                      
	                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div class="card">
	                                <div class="card-body">
	                                    <div class="d-inline-block">
	                                        <h5 class="text-muted">Tổng doanh thu</h5>
	                                        <h2 class="mb-0"> {props.price}</h2>
	                                    </div>
	                                    <div class="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
	                                        {/* <i class="fa fa-eye fa-fw fa-sm text-info"></i> */}
                                            <FaMoneyBillAlt className="fa fa-fw fa-sm text-brand"/>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                  
	                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div class="card">
	                                <div class="card-body">
	                                    <div class="d-inline-block">
	                                        <h5 class="text-muted">Tổng lượng khách</h5>
	                                        <h2 class="mb-0"> {props.guest}</h2>
	                                    </div>
	                                    <div class="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
	                                        {/* <i class="fa fa-user fa-fw fa-sm text-primary"></i> */}
                                            <FaUserAlt className="fa fa-fw fa-sm text-primary"/>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                       
	                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div class="card">
	                                <div class="card-body">
	                                    <div class="d-inline-block">
	                                        <h5 class="text-muted">Số phòng đã thuê</h5>
	                                        <h2 class="mb-0">{props.room}</h2>
	                                    </div>
	                                    <div class="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
	                                        {/* <i class="fa fa-handshake fa-fw fa-sm text-secondary"></i> */}
                                            <FaBox className="fa fa-fw fa-sm text-secondary"/>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                       
	                        
	         
	                    </div>
    )
  }
  
  export default CustomerList