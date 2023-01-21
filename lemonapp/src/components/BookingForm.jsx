import React, { useState } from 'react'

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {

    // Set the initial date to tomorrow
    const initDate = new Date();
    initDate.setDate(initDate.getDate() + 1);

    // Format the date to YYYY-MM-DD
    const YYYY = initDate.getFullYear();
    const MM = initDate.getMonth() < 10 ? "0" + (initDate.getMonth() + 1) : initDate.getMonth() + 1;
    const DD = initDate.getDate() < 10 ? "0" + initDate.getDate() : initDate.getDate();

    // Set the initial state
    const [date, setDate] = useState(YYYY + "-" + MM + "-" + DD);

    // Set the initial time to 17:00
    const [time, setTime] = useState("17:00");

    // Set the initial number of guests to 2
    const [guests, setGuests] = useState(2);

    // Set the initial occassion to none
    const [occassion, setOccassion] = useState("none");

    // The function isValidDate() checks if the date is valid
    function isValidDate(dateString) {
        const yyyymmdd = dateString.split("-");
        const dateObj = new Date(parseInt(yyyymmdd[0]), parseInt(yyyymmdd[1]) - 1, parseInt(yyyymmdd[2]));
        if (dateObj <= new Date())
            return false;
        return true;
    }

    // The function getDateObject() returns a date object
    function getDateObject (dateString) {
        const yyyymmdd = dateString.split("-");
        const dateObj = new Date(parseInt(yyyymmdd[0]), parseInt(yyyymmdd[1]) - 1, parseInt(yyyymmdd[2]));
        return dateObj;
    }


    // The function handleDateChange() checks if the date is valid and updates the available times
    function handleDateChange(e) {
        if (!isValidDate(e.target.value)) {
            alert(`Sorry! Reservations not available for this date!`);
            return;
        }
        const dateObject = getDateObject(e.target.value);
        setDate(e.target.value);
        setAvailableTimes({ setBookingDate: dateObject });
    }


    // The function handleSubmit() submits the form
    // the values of the form are stored in the state
    // the state is passed to the submitForm() function
    // the submitForm() function is passed as a prop from the parent component (Booking.jsx)
    function handleSubmit(e) {
        e.preventDefault();
        const reservation = {
            date: date,
            time: time,
            guests: guests,
            occassion: occassion
        }
        submitForm(reservation);
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Reserve a table</h1>
        <div className="form-group">
            <label htmlFor="Date">Choose Date</label>
            <input type="date" name='date' value={date} onChange={handleDateChange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="time">Choose Time</label>
            <select name='time' value={time} onChange={(e) => setTime(e.target.value)} required>
                {
                    availableTimes.times.map((time, index) => {
                        return <option value={time} key={index}>{ time }</option>
                    })
                }
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label htmlFor="occassion">Occassion</label>
            <select name='occassion' value={occassion} onChange={(e) => setOccassion(e.target.value)} >
                <option value="Birthday">Birthday</option>
                <option value="Business">Business</option>
                <option value="Date">Date</option>
                <option value="Family">Family</option>
                <option value="Friends">Friends</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>
        </div>
        <input type="submit" value="Confirm Reservation" />
    </form>
  )
}

export default BookingForm