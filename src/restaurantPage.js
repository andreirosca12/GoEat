import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './restaurantPage.css';
import logo from './assets/GoeatLogo.png'; // Importă imaginea logo-ului

Modal.setAppElement('#root'); // Setează elementul principal al aplicației pentru accesibilitate

function RestaurantPage() {
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
      <img src={logo} alt="Logo" className="logo" /> {/* Adaugă imaginea logo-ului */}
      <h1>Marty</h1>
      <button className="booking-button" onClick={openModal}>Book Now</button>
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
      <button className="back-button" onClick={() => navigate('/')}>Go Back</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Select  date & hour for resertvation</h2>
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

      <div className="reservations">
        <h2>My Reservations</h2>
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              {reservation}
              <button onClick={() => handleDeleteReservation(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantPage;