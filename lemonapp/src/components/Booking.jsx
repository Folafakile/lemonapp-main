import React from "react";
import BookTable from "./BookTable";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api/bookingAPI";

const Booking = () => {

  function initializeTimes() {
    const times = {
      times: [...fetchAPI(new Date())],
    };
    return times;
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  }

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      window.location.href = '/confirmedbooking';
    }
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
    <div>
      <BookTable
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Booking;
