import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function CategoryPage() {
  const { category } = useParams();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=bad26b00a027bcb73b9e96c1bfe0a955`
        );

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  // 🔥 ADMIN CONTROL
  const deleted =
    JSON.parse(localStorage.getItem("deleted_articles")) || [];

  const filteredArticles = articles.filter(
    (a) => !deleted.includes(a.url)
  );

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid">
      {filteredArticles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
}

export default CategoryPage;