import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Trips from "./pages/Trips";
import Itinerary from "./pages/Itinerary";
import SavedItineraries from "./pages/SavedItineraries";
import Home from "./pages/Home";

function App() {
  return (
    <>

      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>


        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Public Routes */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Dashboard */}

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        {/* Protected Trips */}

        <Route
          path="/trips"
          element={
            <ProtectedRoute>
              <Trips />
            </ProtectedRoute>
          }
        />
        
        { /* AI Itinerary */}

        <Route
          path="/itinerary"
          element={<Itinerary />}
        />  

      

        <Route
          path="/saved-itineraries"
          element={<SavedItineraries />}
       />

       </Routes>

    </>
  );
}

export default App;