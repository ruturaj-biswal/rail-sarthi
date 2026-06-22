import axios from "axios";

export const getStations = async () => {
  const response = await axios.get(
    "http://127.0.0.1:56355/api/stations"
  );

  return response.data;
};