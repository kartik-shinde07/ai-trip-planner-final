import { Link } from "react-router-dom";

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

      <Link to="/">Dashboard</Link>
      {" | "}

      <Link to="/trips">Trips</Link>
      {" | "}

      <Link to="/itinerary">Itinerary</Link>
      {" | "}

      <Link to="/login">Login</Link>
      {" | "}

      <Link to="/register">Register</Link>
      {" | "}

      {/* Logout Button */}
      <button onClick={handleLogout}>
        Logout
      </button>

    </nav>
  );
}

export default Navbar;