import { useState } from "react";
import TrainCard from "./TrainCard";
import { searchTrains } from "../services/trainService";

function SearchBox() {

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [trains, setTrains] = useState([]);

  const handleSearch = async () => {
    if (!source || !destination || !date) {
      alert("Please fill all fields");
      return;
    }
    try {
      const data = await searchTrains(
        source.toUpperCase(),
        destination.toUpperCase(),
        date
      );
      setTrains(data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch trains");
    }
  };

  const inputStyle = {
    padding: "18px 20px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: "17px",
    fontWeight: 400,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border 0.2s",
    minWidth: 0,
  };

  const labelStyle = {
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "rgba(200,215,255,0.55)",
    fontWeight: 500,
    marginBottom: "8px",
    display: "block",
  };

  return (
    <div style={{ width: "100%", maxWidth: "1000px" }}>

      {/* Search Box */}
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "28px",
          padding: "32px 36px",
          boxShadow: "0 8px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,166,35,0.08)",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#F5A623",
            marginBottom: "24px",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          🚆 Find Your Train
        </p>

        {/* Grid — inputs take equal flexible space, button is fixed width */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 180px",
            gap: "16px",
            alignItems: "end",
          }}
        >

          {/* From */}
          <div>
            <label style={labelStyle}>From</label>
            <input
              type="text"
              placeholder="e.g. Berhampur"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid rgba(0,212,255,0.55)")}
              onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.15)")}
            />
          </div>

          {/* To */}
          <div>
            <label style={labelStyle}>To</label>
            <input
              type="text"
              placeholder="e.g. Howrah"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid rgba(0,212,255,0.55)")}
              onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.15)")}
            />
          </div>

          {/* Date */}
          <div>
            <label style={labelStyle}>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ ...inputStyle, colorScheme: "dark" }}
              onFocus={(e) => (e.target.style.border = "1px solid rgba(0,212,255,0.55)")}
              onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.15)")}
            />
          </div>

          {/* Search Button */}
          <div>
            <label style={{ ...labelStyle, opacity: 0 }}>Search</label>
            <button
              onClick={handleSearch}
              style={{
                width: "100%",
                padding: "18px 24px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #F5A623, #e8920a)",
                color: "#080C18",
                fontWeight: 700,
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
                transition: "transform 0.15s, box-shadow 0.15s",
                boxShadow: "0 4px 20px rgba(245,166,35,0.35)",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,166,35,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,166,35,0.35)";
              }}
            >
              Search Trains
            </button>
          </div>

        </div>
      </div>

      {/* Results */}
      {trains.length > 0 ? (

        <div style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: 700, marginBottom: "24px" }}>
            Available Trains
          </h2>
          {trains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>

      ) : (

        source && destination && date && (
          <div
            className="animate-pulse"
            style={{
              marginTop: "40px",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(239,68,68,0.35)",
              borderRadius: "28px",
              padding: "48px 40px",
              textAlign: "center",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ fontSize: "80px", marginBottom: "16px" }}>🚆</div>
            <h2 style={{ color: "#f87171", fontSize: "34px", fontWeight: 800, margin: 0 }}>
              No Trains Available
            </h2>
            <p style={{ marginTop: "16px", color: "rgba(220,220,220,0.85)", fontSize: "17px" }}>
              Sorry! We couldn't find any trains for this route.
            </p>
            <p style={{ marginTop: "8px", color: "rgba(180,180,180,0.6)", fontSize: "14px" }}>
              Try another station or select a different date.
            </p>
          </div>
        )

      )}

    </div>
  );
}

export default SearchBox;