import axios from "axios";

export const getBookingsByMobile =
  async (mobile) => {

    const response = await axios.get(
      `http://localhost:8080/api/bookings/mobile/${mobile}`
    );

    return response.data;
};