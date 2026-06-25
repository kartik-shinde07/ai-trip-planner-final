import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  // Runs when Logout button is clicked
  const handleLogout = () => {

    // Remove token from localStorage
    localStorage.removeItem("token");

    // Reload page
    window.location.reload();

  };

  return (
    <nav>

      
  <h2>TripGenius</h2>

 
    <div>
      <Link to="/dashboard">Dashboard</Link>
      {" | "}

      <Link to="/trips">Trips</Link>
      {" | "}

      <Link to="/itinerary">Itinerary</Link>
      {" | "}

      <Link to="/login">Login</Link>
      {" | "}

      <Link to="/register">Register</Link>
      {" | "}

      <Link to="/saved-itineraries">
      Saved Itineraries
      </Link>

      {/* Logout Button */}
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
    </nav>
  );
}

export default Navbar;