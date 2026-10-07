import { useEffect, useState } from "react";

function App() {
  const environment = import.meta.env.VITE_ENVIRONMENT ?? "local";
  const apiUrl = import.meta.env.VITE_API_URL ?? "";

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${apiUrl}/api/message`)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("API request failed");
      });
  }, [apiUrl]);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Aircraft Profile Feature</h1>
      <h2>Environment: {environment}</h2>

      <p>API: {apiUrl}</p>

      <h3>{message}</h3>
    </div>
  );
}

export default App;
