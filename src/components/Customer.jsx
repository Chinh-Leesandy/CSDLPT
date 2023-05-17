import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export const Customer = () => {
  const [customer, setCustomer] = useState([]);
  const [selectCustomer, setSelectCustomer] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/customer")
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const handleView = (id) => {
    console.log(id);
    navigate(`/customer/${id}`);
  }; 
  const handleViewTicket = (id) =>{
    navigate(`/customerTicket/${id}`);
  };
  const handleAdd = () => {
    navigate(`/customer/-1`);
  };
  const filteredCustomers = selectCustomer
    ? customer.filter((customer) => customer.id.slice(1, 3) === selectCustomer)
    : customer;
  return (
    <div>
      <h2 className="text-center">Thống kê khách hàng </h2>
      <div className="container">
        <div className="d-flex">
          <div className="text-center d-flex justify-content-start col-8" style={{height: "2.55rem"}}>
            <select className="form-select" value={selectCustomer} onChange={(e) => setSelectCustomer(e.target.value)}>
              <option value="">All</option>
              <option value="HN">Hà Nội</option>
              <option value="NB">Ninh Bình</option>
              <option value="HP">Hải Phòng</option>
              <option value="ND">Nam Định</option>
              <option value="TB">Thái Bình</option>
              <option value="HY">Hưng Yên</option>
              <option value="PT">Phú Thọ</option>
              <option value="DB">Điện Biên</option>
              <option value="HT">Hà Tĩnh</option>
            </select>
          </div>
          <div
            className="text-center d-flex justify-content-end"
            style={{ padding: "5px" }}
          >
            <button
              style={{ padding: "5px 100px" }}
              className="btn btn-outline-success "
              onClick={handleAdd}
            >
              Add Customer
            </button>
          </div>
        </div>
        <div className="row">
          <table className="table table-secondary table-striped">
            <thead className="table-dark">
              <tr style={{ textAlign: "center" }}>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id} </td>
                  <td>{customer.name} </td>
                  <td>{customer.phoneNumber} </td>
                  <td>{customer.address}</td>
                  <td>
                    <button
                      style={{ marginRight: "5px" }}
                      onClick={() => handleView(customer.id)}
                      className="btn btn-outline-danger"
                    >
                      View
                    </button>
                    <button
                      style={{ marginRight: "5px" }}
                      onClick={() => handleView(customer.id)}
                      className="btn btn-outline-warning"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginRight: "5px" }}
                      onClick={() => handleViewTicket(customer.id)}
                      className="btn btn-outline-success"
                    >
                      View Ticket
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
