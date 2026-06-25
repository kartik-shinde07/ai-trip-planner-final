import "./Home.css";

function Home() {
  return (
    <div className="hero">

      <div className="hero-left">

        <div className="badge">
          ✈ AI Powered Travel Planner
        </div>

        <h1>
          Plan Smarter.
          <br />
          <span>Travel Better.</span>
        </h1>

        <p>
          Your AI travel companion that creates
          personalized itineraries, manages
          budgets and helps plan trips.
        </p>

        <button>
          Generate My Trip
        </button>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="travel"
        />

      </div>

    </div>
  );
}

export default Home;