import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const CustomerDetail = () => {
  const params = useParams();
  const [customer, setCustomer] = useState([]);
  const id = params.id;
  const navigate = useNavigate();
  const onSaveClick = () => {
    const format = /^C[A-Z][A-Z][0-9][0-9][0-9]$/;
    console.log(customer);
    if (id < 0) {
      if (!customer.id.match(format)) {
        alert("!!!Thông báo lỗi định dạng id!!!");
      } else {
        fetch(`http://localhost:8080/add`, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(customer),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      }
    } else {
      if (!customer.id.match(format)) {
        alert("!!!Thông báo lỗi định dạng id!!!");
      } else {
        fetch(`http://localhost:8080/update/${id}`, {
          method: "PUT",
          mode: "cors",
          body: JSON.stringify(customer),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      }
    }
    navigate(`/`);
    window.location.reload();
  };
  useEffect(() => {
    fetch(`http://localhost:8080/customer/${id}`)
      .then((response) => response.json())
      .then((data) => setCustomer(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-center" style={{ paddingBottom: "2rem" }}>
        {id < 0
          ? "Thêm thông tin khách hàng"
          : `Sửa thông tin khách hàng ${id}`}
      </h1>
      <div className="container" style={{ backgroundColor: "#f6f0ff" }}>
        <div className="row align-items-start">
          <div className="col-3">
            <span>Ảnh đại diện</span>
            {id !== "-1" ? (
              <img
                className="img-fluid"
                src="https://freenice.net/wp-content/uploads/2021/08/hinh-anh-avatar-dep.jpg"
              />
            ) : (
              <input type="file" />
            )}
          </div>
          <div className="col-9" style={{ padding: "4rem 12rem" }}>
            ID :{" "}
            <input
              type="text"
              value={customer.id}
              onChange={(e) => setCustomer({ ...customer, id: e.target.value })}
            />
            <br />
            Name :{" "}
            <input
              type="text"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
            <br />
            Phone Number :{" "}
            <input
              type="text"
              value={customer.phoneNumber}
              onChange={(e) =>
                setCustomer({ ...customer, phoneNumber: e.target.value })
              }
            />
            <br />
            Address :{" "}
            <input
              style={{ width: "300px" }}
              type="text"
              value={customer.address}
              onChange={(e) =>
                setCustomer({ ...customer, address: e.target.value })
              }
            />
            <br />
            <div
              className="d-grid gap-1 d-flex justify-content-center"
              style={{ padding: "7px 5px" }}
            >
              <button
                className=" col-4 btn btn-outline-warning btn-sm"
                onClick={onSaveClick}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
