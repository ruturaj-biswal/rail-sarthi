import axios from "axios";

export const getSeats = async (trainId) => {

  const response = await axios.get(
    `http://localhost:8080/api/seats/${trainId}`
  );

  return response.data;
};