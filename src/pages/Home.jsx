import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const categories = [
    {
      name: "Sports",
      path: "/category/sports",
      desc: "Live scores, match highlights & sports updates.",
    },
    {
      name: "Technology",
      path: "/category/technology",
      desc: "Latest gadgets, AI trends & tech innovations.",
    },
    {
      name: "Business",
      path: "/category/business",
      desc: "Market news, startups & financial insights.",
    },
    {
      name: "Movies",
      path: "/category/entertainment",
      desc: "Celebrity news, film releases & cinema updates.",
    },
  ];

  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero">
        <h1>Stay Informed. Stay Ahead.</h1>

        <p>
          Welcome to <strong>NewsHub</strong> – your one-stop destination to explore
          the latest updates from around the world. Discover breaking news,
          trending stories, business insights, sports highlights, and
          entertainment buzz – all in one place.
        </p>

        <div className="hero-buttons">
          <Link to="/category/business" className="primary-btn">
            Explore Business
          </Link>
          <Link to="/category/entertainment" className="secondary-btn">
            Explore Movies
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-preview">
        <h2>Popular Categories</h2>

        <div className="category-cards">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="card">
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;