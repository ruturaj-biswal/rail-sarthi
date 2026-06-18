import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="p-4 bg-black text-white">

      <Link to="/">Home</Link>

      {" | "}

      <Link to="/bookings">
        My Bookings
      </Link>

      {" | "}

      <Link to="/login">
        Login
      </Link>

      {" | "}

      <Link to="/register">
        Register
      </Link>

    </nav>

  );
}

export default Navbar;