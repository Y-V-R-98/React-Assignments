import React from 'react';
import logo from './logo.svg';
import './App.css';

var arrow="<"
var arrow = "<"
function App() {
  const person = {
    name: "Alan Ford",
    id: "00005152"
  }

  const customerInfo = {
    AppointmentTime: "9:00",
    Date: "24-05-2016",
    email: "alan@gmail.com",
    phone: "+31123456789"
  }

  const orderInfo = {
    status: "In Progress",
    door: "Mark",
    time: "10:30",
    date: "25-05-2016"
  }

  const productList = {
    title: "Boltaart Bosbessen",
    about: "Lorem Ipsum is a dummy text content since a while, it'll continue to be so",
    image: "https://www.w3schools.com/howto/img_avatar.png"
  }

  return (
    <div className="parent-container">
    
      {/* Start Your code here */}
      <header className="header-page">
      <div className="person">
        <h1>{person.name}</h1>
        <h3>{person.id}</h3>
        </div>

        <div><button className="btn">Print</button></div>
        </header>



      <div className="customer-info">
        <p><strong>Appointment On: </strong>{customerInfo.AppointmentTime} ({customerInfo.Date})</p>
        <p><strong>Email: </strong>{customerInfo.email}</p>
        <p><strong>Phone: </strong>{customerInfo.phone}</p>
      </div>

      <div className="order-info">
        <div className="box">
          <h3><strong>Status</strong></h3>
          <ul>
            <li>{orderInfo.status}</li>
          </ul>
        </div>
        <div className="box">
          <h3><strong>Door</strong></h3>
          <p>{orderInfo.door}</p>
        </div>
        <div className="box">
          <h3><strong>Time</strong></h3>
          <p>{orderInfo.time} ({orderInfo.date})</p>
        </div>
      </div>

      <div className="product-list">
        <div className="check-box">
          <label><input type="checkbox"></input></label>

        <img src={productList.image} alt="Profile image" />
        </div>
        <div className="about">
          <h3>{productList.title}</h3>
          <p>{productList.about}</p>
        </div>
      </div>



    </div>
  );
}

export default App;
