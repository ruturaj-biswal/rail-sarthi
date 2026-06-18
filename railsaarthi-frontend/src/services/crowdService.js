import axios from "axios";

export const getCrowdPrediction = async (
  trainId,
  bookedSeats = 500
) => {

  const response = await axios.post(
    "http://localhost:8080/api/ml/crowd",
    {
      trainId: trainId,
      dayOfWeek: new Date().getDay() || 7,
      month: new Date().getMonth() + 1,
      bookedSeats: bookedSeats
    }
  );

  return response.data;
};