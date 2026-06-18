import axios from "axios";

export const searchTrains = async (
  source,
  destination,
  date
) => {

  const response = await axios.get(
    `http://localhost:8080/api/trains/search?source=${source}&destination=${destination}&date=${date}`
  );

  return response.data;
};