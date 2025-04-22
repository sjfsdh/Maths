export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 1rem",
        textAlign: "center",
        backgroundColor: "#f9fafb",
        color: "#111827",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", marginBottom: "1rem", color: "#2563eb" }}>404</h1>
      <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem", maxWidth: "28rem", fontSize: "1.125rem", lineHeight: "1.75" }}>
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <a
        href="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "0.375rem",
          textDecoration: "none",
          transition: "background-color 0.2s",
          fontWeight: "500",
          fontSize: "1rem",
        }}
      >
        Return Home
      </a>
    </div>
  )
}
