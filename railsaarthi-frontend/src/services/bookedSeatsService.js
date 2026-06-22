import axios from "axios";

export const getBookedSeats = async (
  trainId
) => {

  const response =
    await axios.get(
      `http://127.0.0.1:56355/api/booked-seats/${trainId}`
    );

  return response.data.bookedSeats;
};