import axios from "axios";

export const getCrowdPrediction = async (
  trainId,
  bookedSeats = 500
) => {

  const response = await axios.post(
    "http://127.0.0.1:56355/api/ml/crowd",
    {
      trainId: trainId,
      dayOfWeek: new Date().getDay() || 7,
      month: new Date().getMonth() + 1,
      bookedSeats: bookedSeats
    }
  );

  return response.data;
};