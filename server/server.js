const http = require("http");

const server = http.createServer((req, res) => {
  // Set CORS headers for all requests
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Content-Type", "application/json");

  // Handle browser preflight (OPTIONS) request
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.url === "/health") {
    res.end(
      JSON.stringify({
        status: "healthy",
        environment: "qa",
      }),
    );

    return;
  }

  if (req.url === "/api/message") {
    res.end(
      JSON.stringify({
        message: "Hello from QA API",
      }),
    );

    return;
  }

  res.statusCode = 404;

  res.end(
    JSON.stringify({
      error: "Not found",
    }),
  );
});

server.listen(5000, () => {
  console.log("QA API running on port 5000");
});
