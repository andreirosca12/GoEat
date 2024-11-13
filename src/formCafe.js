import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './restaurantPage.css';
import logo from './assets/formLogo.jpg'; // Importă imaginea logo-ului
import backgroundImage from './assets/form.jpg'; // Importă imaginea de fundal

Modal.setAppElement('#root'); // Setează elementul principal al aplicației pentru accesibilitate

function FormCafe() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [reservations, setReservations] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleReservation = () => {
    if (selectedDate) {
      setReservations([...reservations, selectedDate]);
      setSelectedDate('');
      closeModal();
    }
  };

  const handleDeleteReservation = (index) => {
    const newReservations = reservations.filter((_, i) => i !== index);
    setReservations(newReservations);
  };

  return (
    <div className="restaurant-page">
      <div className="header">
        <img src={backgroundImage} alt="Restaurant" className="background-image" style={{height: '770px', width: '1500'}}/>
        <img src={logo} alt="Logo" className="logo" />
        <div className="restaurant-name-box">
          <h1 className="restaurant-name">Form Cafe</h1>
        </div>
      </div>
      <div className="content-box">
        <div className="popup-section">
          <button className="booking-button" onClick={openModal}>Book Now</button>
          <button className="back-button" onClick={() => navigate('/')}>Go Back</button>
        </div>
        <div className="schedule">
          <h2>Program</h2>
          <p>Monday - Friday: 10:00 - 22:00</p>
          <p>Saturday - Sunday: 12:00 - 24:00</p>
        </div>
        <div className="menu">
          <h2>Menu</h2>
          <ul>
            <li>Pizza Margherita - 25 RON</li>
            <li>Spaghetti Carbonara - 30 RON</li>
            <li>Caesar Salad - 20 RON</li>
          </ul>
        </div>
        <div className="reservations">
          <h2>My Reservations</h2>
          <ul>
            {reservations.map((reservation, index) => (
              <li key={index} className="reservation-item">
                {reservation}
                <button className="delete-button" onClick={() => handleDeleteReservation(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Select date & hour for reservation</h2>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="2023-10-01 18:00"
                checked={selectedDate === '2023-10-01 18:00'}
                onChange={handleDateChange}
              />
              Date: 2023-10-01, Hour: 18:00
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="2023-10-02 19:00"
                checked={selectedDate === '2023-10-02 19:00'}
                onChange={handleDateChange}
              />
              Date: 2023-10-02, Hour: 19:00
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="2023-10-03 20:00"
                checked={selectedDate === '2023-10-03 20:00'}
                onChange={handleDateChange}
              />
              Date: 2023-10-03, Hour: 20:00
            </label>
          </li>
          {/* Adaugă mai multe date și ore disponibile */}
        </ul>
        <button onClick={handleReservation}>Confirm reservation</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default FormCafe;