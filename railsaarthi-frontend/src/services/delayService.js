import axios from "axios";

export const getDelayPrediction = async (trainId) => {

  const response = await axios.get(
    `http://127.0.0.1:56355/api/delay/${trainId}`
  );

  return response.data;
};