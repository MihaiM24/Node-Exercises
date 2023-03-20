import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

//Connection	keep-alive
//Content-Length	19 -------------------------> This is the length
//Content-Type	application/json
//Date	Mon, 20 Mar 2023 05:37:12 GMT
//Keep-Alive	timeout=5
