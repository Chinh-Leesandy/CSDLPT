import { useEffect, useState } from "react"
import React from 'react'
import { useParams } from 'react-router-dom'
export const CustomerTicket = () => {
    const [customerTicket, setCustomerTicket] = useState([]);
    const params = useParams();
    const id =params.id;
    useEffect(() => {
        fetch(`http://localhost:8080/customerTicket/${id}`)
        .then(response => response.json())
        .then(data => setCustomerTicket(data))
        .catch(err => console.log(err))
    },[]);
  return (
    <div>
        <h2 className="text-center">Thông tin vé của khánh hàng</h2>
        <div className="container">
        <img style={{width: "89.2vw", height:"50vh"}}  src="https://mytourcdn.com/upload_images/Image/Location/14_7_2015/Bi-quyet-du-lich-qua-dem-xe-lua-mytour-1.jpg" alt="" />
        <table className="table table-danger table-striped">
            <thead className="table-warning">
              <tr style={{ textAlign: "center" }}>
                <th>ID Ticket</th>
                <th>Ticket Price</th>
                <th>Seat Type</th>
                <th>ID TrainRide</th>
                <th>ID Customer</th>
                <th>Name Customer</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {customerTicket.map((customerTicket) => (
                <tr key={customerTicket.id}>
                  <td>{customerTicket.id} </td>
                  <td>{customerTicket.ticketPrice} </td>
                  <td>{customerTicket.seatType} </td>
                  <td>{customerTicket.idTrainRide}</td>
                  <td>{customerTicket.idCustomer}</td>
                  <td>{customerTicket.customerName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}
