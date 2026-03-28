function ErrorMessage({ message = "Something went wrong!", className = "" }) {
  if (!message) return null;

  return (
    <p
      className={`error ${className}`}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </p>
  );
}

export default ErrorMessage;