const http = require("http");
const app = require("./app");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!\n");
// });

const port = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

const server = app.listen(port, (req, res) => {
  console.log(`app is running on port ${port}`);
});
