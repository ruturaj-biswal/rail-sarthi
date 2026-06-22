import axios from "axios";

export const searchTrains = async (
  source,
  destination,
  date
) => {

  const response = await axios.get(
    `http://127.0.0.1:56355/api/trains/search?source=${source}&destination=${destination}&date=${date}`
  );

  return response.data;
};