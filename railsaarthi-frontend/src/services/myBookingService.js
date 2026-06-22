import axios from "axios";

export const getBookingsByMobile =
  async (mobile) => {

    const response = await axios.get(
      `http://127.0.0.1:56355/api/bookings/mobile/${mobile}`
    );

    return response.data;
};