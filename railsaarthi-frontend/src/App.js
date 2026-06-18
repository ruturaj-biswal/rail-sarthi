import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBookings from "./pages/MyBookings";

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <Route
          path="/bookings"
          element={<MyBookings />}
        />
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        /> <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;