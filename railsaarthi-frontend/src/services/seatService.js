import axios from "axios";

export const getSeats = async (trainId) => {

  const response = await axios.get(
  `http://127.0.0.1:56355/api/seats/${trainId}`
  );

  return response.data;
};