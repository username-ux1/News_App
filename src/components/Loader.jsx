function Loader({ text = "Loading...", className = "" }) {
  return (
    <div className={`center ${className}`} role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true"></span>
      <p>{text}</p>
    </div>
  );
}

export default Loader;