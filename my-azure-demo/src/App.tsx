function App() {
  const environment = import.meta.env.VITE_ENVIRONMENT ?? "local";
  const apiUrl = import.meta.env.VITE_API_URL ?? "not configured";

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>My Azure Demo</h1>

      <h2>Environment: {environment}</h2>

      <p>API URL: {apiUrl}</p>

      <hr />

      <p>If you are seeing this page, the application is running.</p>
    </div>
  );
}

export default App;
