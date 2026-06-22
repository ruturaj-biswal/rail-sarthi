import axios from "axios";

export const bookTicket = async (bookingData) => {

  const response = await axios.post(
    "http://127.0.0.1:56355/api/bookings",
    bookingData
  );

  return response.data;
};