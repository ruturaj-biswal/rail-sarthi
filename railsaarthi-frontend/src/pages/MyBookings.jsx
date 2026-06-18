import { useState } from "react";
import { jsPDF } from "jspdf";
import { getBookingsByMobile } from "../services/myBookingService";

function MyBookings() {

  const [mobile, setMobile] = useState("");
  const [bookings, setBookings] = useState([]);
  const [selectedTicket, setSelectedTicket] =
    useState(null);

  const searchTickets = async () => {

    if (!mobile) {
      alert("Please enter mobile number");
      return;
    }

    try {

      const data =
        await getBookingsByMobile(
          mobile
        );

      setBookings(data);

    } catch (error) {

      console.error(error);

      alert("Failed to load tickets");

    }
  };

  const downloadPDF = (booking) => {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "RailSaarthi E-Ticket",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Ticket ID: ${booking.id}`,
      20,
      40
    );

    doc.text(
      `Passenger: ${booking.passengerName}`,
      20,
      50
    );

    doc.text(
      `Age: ${booking.age}`,
      20,
      60
    );

    doc.text(
      `Gender: ${booking.gender}`,
      20,
      70
    );

    doc.text(
      `Mobile: ${booking.mobile}`,
      20,
      80
    );

    doc.text(
      `Coach: ${booking.coachType}`,
      20,
      90
    );

    doc.text(
      `Train ID: ${booking.trainId}`,
      20,
      100
    );

    doc.text(
      "Status: CONFIRMED",
      20,
      120
    );

    doc.save(
      `RailSaarthi-Ticket-${booking.id}.pdf`
    );
  };

  return (

    <div className="p-10 min-h-screen bg-black text-white">

      <h1 className="text-4xl font-bold mb-8">
        🚆 My Bookings
      </h1>

      <div className="mb-8 flex gap-3">

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value)
          }
          className="
            p-3
            rounded-xl
            text-black
            w-[300px]
          "
        />

        <button
          onClick={searchTickets}
          className="
            bg-blue-500
            hover:bg-blue-600
            px-5
            py-3
            rounded-xl
            font-bold
          "
        >
          Search My Tickets
        </button>

      </div>

      {bookings.length === 0 && (

        <div
          className="
            bg-red-500/20
            border
            border-red-500
            p-5
            rounded-xl
          "
        >
          No Tickets Found
        </div>

      )}

      {bookings.map((booking) => (

        <div
          key={booking.id}
          className="
            bg-white/10
            p-5
            rounded-2xl
            mb-4
          "
        >

          <p>
            <strong>Name:</strong>
            {" "}
            {booking.passengerName}
          </p>

          <p>
            <strong>Age:</strong>
            {" "}
            {booking.age}
          </p>

          <p>
            <strong>Gender:</strong>
            {" "}
            {booking.gender}
          </p>

          <p>
            <strong>Mobile:</strong>
            {" "}
            {booking.mobile}
          </p>

          <p>
            <strong>Coach:</strong>
            {" "}
            {booking.coachType}
          </p>

          <p>
            <strong>Train ID:</strong>
            {" "}
            {booking.trainId}
          </p>

          <div className="flex gap-3 mt-4">

            <button
              onClick={() =>
                setSelectedTicket(booking)
              }
              className="
                bg-blue-500
                hover:bg-blue-600
                px-4
                py-2
                rounded-lg
                font-bold
              "
            >
              View Ticket
            </button>

            <button
              onClick={() =>
                window.print()
              }
              className="
                bg-green-500
                hover:bg-green-600
                px-4
                py-2
                rounded-lg
                font-bold
              "
            >
              Print Ticket
            </button>

            <button
              onClick={() =>
                downloadPDF(booking)
              }
              className="
                bg-red-500
                hover:bg-red-600
                px-4
                py-2
                rounded-lg
                font-bold
              "
            >
              Download PDF
            </button>

          </div>

        </div>

      ))}

      {selectedTicket && (

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
              bg-white
              text-black
              p-8
              rounded-2xl
              w-[500px]
            "
          >

            <h2 className="text-3xl font-bold text-center">
              🚆 RailSaarthi E-Ticket
            </h2>

            <hr className="my-4" />

            <p>
              <strong>Ticket ID:</strong>
              {" "}
              {selectedTicket.id}
            </p>
            <p>
              <strong>PNR Number:</strong>
              {" "}
              {selectedTicket.pnrNumber}
            </p>

            <p>
              <strong>Passenger:</strong>
              {" "}
              {selectedTicket.passengerName}
            </p>

            <p>
              <strong>Age:</strong>
              {" "}
              {selectedTicket.age}
            </p>

            <p>
              <strong>Gender:</strong>
              {" "}
              {selectedTicket.gender}
            </p>

            <p>
              <strong>Mobile:</strong>
              {" "}
              {selectedTicket.mobile}
            </p>

            <p>
              <strong>Coach:</strong>
              {" "}
              {selectedTicket.coachType}
            </p>
            <p>
              <strong>PNR:</strong>
              {" "}
              {selectedTicket.pnrNumber}
            </p>


            <p>
              <strong>Train ID:</strong>
              {" "}
              {selectedTicket.trainId}
            </p>

            <p className="text-green-600 font-bold mt-4">
              Status : CONFIRMED
            </p>

            <div className="flex gap-3 mt-5">

              <button
                onClick={() =>
                  window.print()
                }
                className="
                  flex-1
                  bg-green-500
                  text-white
                  py-3
                  rounded-xl
                "
              >
                Print Ticket
              </button>

              <button
                onClick={() =>
                  downloadPDF(
                    selectedTicket
                  )
                }
                className="
                  flex-1
                  bg-blue-500
                  text-white
                  py-3
                  rounded-xl
                "
              >
                Download PDF
              </button>

              <button
                onClick={() =>
                  setSelectedTicket(null)
                }
                className="
                  flex-1
                  bg-red-500
                  text-white
                  py-3
                  rounded-xl
                "
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default MyBookings;