import axios from "axios";

export const getBookedSeats = async (
  trainId
) => {

  const response =
    await axios.get(
      `http://localhost:8080/api/booked-seats/${trainId}`
    );

  return response.data.bookedSeats;
};