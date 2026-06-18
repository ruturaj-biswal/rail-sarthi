import {
  useEffect,
  useState,
  useCallback
} from "react";
import { getSeats } from "../services/seatService";
import { bookTicket } from "../services/bookingService";
import { getCrowdPrediction } from "../services/crowdService";
import { getDelayPrediction } from "../services/delayService";
import { getBookedSeats } from "../services/bookedSeatsService";

function TrainCard({ train }) {

  // =========================
  // STATES
  // =========================

  const [seats, setSeats] = useState([]);
  const [crowd, setCrowd] = useState(0);
  const [delay, setDelay] = useState(0);

  const [showForm, setShowForm] = useState(false);

  const [bookingData, setBookingData] = useState({
    passengerName: "",
    age: "",
    gender: "Male",
    mobile: "",
    coachType: ""
  });

  // =========================
  // LOAD DATA
  // =========================

  useEffect(() => {
    loadSeats();
    loadPredictions();
  }, [loadSeats, loadPredictions]);

  const loadSeats = useCallback(async () => {
    try {
      const data = await getSeats(train.id);
      setSeats(data);
    } catch (error) {
      console.error(error);
    }
  }, [train.id]);

  const loadPredictions = useCallback(async () => {
    try {

      const bookedSeats =
        await getBookedSeats(train.id);

      const crowdData =
        await getCrowdPrediction(
          train.id,
          bookedSeats
        );

      const delayData =
        await getDelayPrediction(train.id);

      setCrowd(crowdData);
      setDelay(delayData);

    } catch (error) {
      console.error(error);
    }
  }, [train.id]);

  // =========================
  // AI HELPERS
  // =========================

  const getCrowdStatus = () => {

    if (crowd < 40) {
      return "🟢 Low Crowd";
    }

    if (crowd < 70) {
      return "🟡 Medium Crowd";
    }

    return "🔴 High Crowd";
  };

  const getRecommendedCoach = () => {

    if (seats.length === 0) {
      return null;
    }

    const availableCoaches =
      seats.filter(
        seat => seat.availableSeats > 0
      );

    if (availableCoaches.length === 0) {
      return null;
    }

    return availableCoaches.reduce(
      (best, current) =>
        current.availableSeats >
        best.availableSeats
          ? current
          : best
    );
  };

  const recommendedCoach =
    getRecommendedCoach();

  // =========================
  // BOOKING
  // =========================

  const confirmBooking = async () => {

    if (
      !bookingData.passengerName ||
      !bookingData.age ||
      !bookingData.mobile
    ) {
      alert("Please fill all passenger details");
      return;
    }

    try {

      const result = await bookTicket({
        trainId: train.id,
        passengerName: bookingData.passengerName,
        age: Number(bookingData.age),
        gender: bookingData.gender,
        mobile: bookingData.mobile,
        coachType: bookingData.coachType,
        seatsBooked: 1
      });


    console.log(result);
      alert(
        `Ticket Booked Successfully

      PNR Number: ${result.pnrNumber}

      Status: ${result.status}`
      );

      setShowForm(false);

      setBookingData({
        passengerName: "",
        age: "",
        gender: "Male",
        mobile: "",
        coachType: ""
      });

      await loadSeats();
      await loadPredictions();

    } catch (error) {

      console.error(error);
      alert("Booking Failed");

    }
  };

  return (
    <>
      <div
        className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          text-white
        "
      >

        {/* TRAIN DETAILS */}

        <h3 className="text-2xl font-bold">
          {train.trainName}
        </h3>

        <p className="mt-2">
          🚆 Train No: {train.trainNumber}
        </p>

        <p>
          🕐 Departure: {train.departureTime}
        </p>

        <p>
          🏁 Arrival: {train.arrivalTime}
        </p>

        {/* PREDICTIONS */}

        <div className="mt-4 space-y-2">

          <p className="text-cyan-300 font-bold text-lg">
            👥 Crowd Prediction:
            {" "}
            {Number(crowd).toFixed(2)}%
          </p>

          <p className="font-bold text-lg">
            {getCrowdStatus()}
          </p>

          <p className="text-yellow-300 font-bold text-lg">
            ⏱️ Delay Prediction:
            {" "}
            {delay} min
          </p>

        </div>

        {/* AI RECOMMENDATION */}

        {recommendedCoach && (

          <div
            className="
              mt-5
              bg-green-500/20
              border
              border-green-500
              rounded-2xl
              p-4
            "
          >

            <h4
              className="
                text-green-300
                font-bold
                text-xl
              "
            >
              🤖 AI Coach Recommendation
            </h4>

            <p className="mt-2">
              Recommended Coach:
              {" "}
              <strong>
                {recommendedCoach.coachType}
              </strong>
            </p>

            <p>
              Available Seats:
              {" "}
              {recommendedCoach.availableSeats}
            </p>

            <p className="text-sm mt-2">
              ✓ Highest seat availability
              <br />
              ✓ Better chance of getting seat
              <br />
              ✓ Lower crowd experience
            </p>

          </div>

        )}

        {/* SEATS */}

        <div className="mt-5">

          <h4 className="font-bold text-lg mb-3">
            Seat Availability
          </h4>

          {seats.map((seat) => (

            <div
              key={seat.id}
              className="
                flex
                justify-between
                items-center
                mb-3
                bg-white/10
                p-3
                rounded-xl
              "
            >

              <div>

                {seat.availableSeats > 0 ? (

                  <p>
                    <strong>{seat.coachType}</strong>
                    {" : "}
                    {seat.availableSeats} Seats
                  </p>

                ) : (

                  <p className="text-red-400 font-bold">
                    {seat.coachType}
                    {" : "}
                    No Seats Available
                  </p>

                )}

              </div>

              {seat.availableSeats > 0 && (

                <button
                  onClick={() => {

                    setBookingData({
                      ...bookingData,
                      coachType: seat.coachType
                    });

                    setShowForm(true);

                  }}
                  className="
                    bg-green-500
                    hover:bg-green-600
                    px-4
                    py-2
                    rounded-lg
                    font-bold
                  "
                >
                  Book {seat.coachType}
                </button>

              )}

            </div>

          ))}

        </div>

      </div>

      {/* BOOKING MODAL */}

      {showForm && (

        <div
          className="
            fixed
            inset-0
            bg-black/70
            flex
            justify-center
            items-center
            z-50
          "
        >

          <div
            className="
              bg-gray-900
              p-6
              rounded-2xl
              w-[400px]
              text-white
            "
          >

            <h2 className="text-2xl font-bold mb-4">
              Passenger Details
            </h2>

            <input
              type="text"
              placeholder="Passenger Name"
              className="w-full p-3 mb-3 rounded text-black"
              value={bookingData.passengerName}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  passengerName: e.target.value
                })
              }
            />

            <input
              type="number"
              placeholder="Age"
              className="w-full p-3 mb-3 rounded text-black"
              value={bookingData.age}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  age: e.target.value
                })
              }
            />

            <select
              className="w-full p-3 mb-3 rounded text-black"
              value={bookingData.gender}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  gender: e.target.value
                })
              }
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-3 mb-4 rounded text-black"
              value={bookingData.mobile}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  mobile: e.target.value
                })
              }
            />

            <div className="flex gap-3">

              <button
                onClick={confirmBooking}
                className="
                  flex-1
                  bg-green-500
                  py-3
                  rounded-xl
                  font-bold
                "
              >
                Confirm Booking
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="
                  flex-1
                  bg-red-500
                  py-3
                  rounded-xl
                  font-bold
                "
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default TrainCard;