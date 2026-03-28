import { useLocation, useNavigate } from "react-router-dom";

function ArticleReader() {
  const { state: article } = useLocation();
  const navigate = useNavigate();

  if (!article) {
    return (
      <div className="center">
        <p>No article selected.</p>
        <button onClick={() => navigate("/")}>Go Back Home</button>
      </div>
    );
  }

  const {
    title,
    image,
    content,
    url,
    description,
    source,
    publishedAt,
  } = article;

  return (
    <article className="reader">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{title || "Untitled Article"}</h1>

      {source && <p className="source">Source: {source.name}</p>}
      {publishedAt && (
        <p className="date">
          {new Date(publishedAt).toLocaleString()}
        </p>
      )}

      {image && (
        <img
          src={image}
          alt={title || "news"}
          loading="lazy"
          className="reader-img"
        />
      )}

      <p className="description">
        {description || "No description available."}
      </p>

      <p className="content">
        {content || "Content not available."}
      </p>

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read Full Article →
        </a>
      )}
    </article>
  );
}

export default ArticleReader;