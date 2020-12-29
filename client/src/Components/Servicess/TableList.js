import React, { useState, useEffect } from "react";
import "../../Styles/Services.css";
import InputItem from "./InputItem";
import ServiceItems from "./ServiceItems";
import axios from "axios";

import server from "../../server";

function TableList() {
  const Serviecs=[
       {name:"Giặt ủi",price:"50000"},
       {name:"Nước lọc",price:"10000"},
        {name:"BCS",price:"1000000000"},
      ];
  const [service, setService] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // eslint-disable-next-line
  const fetchServiceData = async () => {
    const result = await axios(server + "/service/");
    console.log("<<DATA::>",result.data);
    setService(result.data);
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  

  const handleDelete = (e) => {
    console.log("<<DELETE>>", e.target);
  };

  const addService = (newService) => {
    // e.preventDefault();

    // newRole.loainhanvien = e.target.loainhanvien.value;
    console.log(newService);
  };

  const updateService = (service) => {
    console.log(service);
  };

  function renderAddForm(e) {
    return (
      <InputItem
        addRow={true}
        cancleAddForm={() => setShowAddForm(false)}
        addService={addService}
      />
    );
  }

  return (
    <div className="content-box">
      <div class="card-body">
        <form id="form-role" onSubmit={addService}>
          <table class="table table-hover">
            <thead class="service-thead">
              <tr>
                <th scope="col">Tên dịch vụ</th>
                <th scope="col">Giá tiền</th>
                <th scope="col">Đơn vị</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>

            <tbody class="service-tbody">
              <section>
                {Serviecs.map((Service) => (
                  <ServiceItems name={Service.name} price={Service.price} onDeleteItem={handleDelete} updateService={updateService}/>
                ))}
              </section>
              <div class=" text-center">
            
              {showAddForm ? (
                renderAddForm()
              ) : (
                <button
                  class="btn btn-primary btn-lg"
                  onClick={() => setShowAddForm(true)}
                >
                  Thêm dịch vụ
                </button>
              )}
            
          </div>
            </tbody>
          </table>
          
        </form>
      </div>
    </div>
  );
}

export default TableList;
