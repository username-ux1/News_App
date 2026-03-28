import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
  const navigate = useNavigate();

  const saveToAdmin = (e) => {
    e.stopPropagation();

    const existing =
      JSON.parse(localStorage.getItem("admin_articles")) || [];

    const alreadyExists = existing.some(
      (item) => item.url === article.url
    );

    if (!alreadyExists) {
      const updated = [...existing, article];
      localStorage.setItem("admin_articles", JSON.stringify(updated));
    }
  };

  return (
    <div
      className="card"
      onClick={() => navigate("/read", { state: article })}
    >
      {article.image && <img src={article.image} alt="news" />}
      <h3>{article.title}</h3>
      <p>{article.description}</p>

      <button className="save-btn" onClick={saveToAdmin}>
        Save
      </button>
    </div>
  );
}

export default ArticleCard;