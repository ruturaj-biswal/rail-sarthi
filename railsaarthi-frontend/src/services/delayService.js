import axios from "axios";

export const getDelayPrediction = async (trainId) => {

  const response = await axios.get(
    `http://localhost:8080/api/delay/${trainId}`
  );

  return response.data;
};