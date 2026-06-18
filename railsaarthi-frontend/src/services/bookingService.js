import axios from "axios";

export const bookTicket = async (bookingData) => {

  const response = await axios.post(
    "http://localhost:8080/api/bookings",
    bookingData
  );

  return response.data;
};