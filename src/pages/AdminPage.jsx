import { useEffect, useState } from "react";

function AdminPage() {
  const [articles, setArticles] = useState([]);

  // 🔥 LOAD ARTICLES
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("admin_articles")) || [];
    setArticles(stored);
  }, []);

  // 🔥 DELETE FUNCTION
  const handleDelete = (url) => {
    // remove from admin list
    const updated = articles.filter((a) => a.url !== url);
    setArticles(updated);

    localStorage.setItem("admin_articles", JSON.stringify(updated));

    // store globally deleted
    const deleted =
      JSON.parse(localStorage.getItem("deleted_articles")) || [];

    if (!deleted.includes(url)) {
      localStorage.setItem(
        "deleted_articles",
        JSON.stringify([...deleted, url])
      );
    }
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>

      {articles.length === 0 ? (
        <p className="center">No saved articles.</p>
      ) : (
        articles.map((article) => (
          <div key={article.url} className="admin-card">
            <h3>{article.title}</h3>

            <button onClick={() => handleDelete(article.url)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminPage;