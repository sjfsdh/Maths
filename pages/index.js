export default function Home() {
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
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Educational Tools</h1>
      <p style={{ marginBottom: "2rem", maxWidth: "28rem" }}>
        Welcome to our educational tools platform. We're currently experiencing technical difficulties.
      </p>
      <p style={{ marginBottom: "2rem", maxWidth: "28rem" }}>Please check back later.</p>
    </div>
  )
}
