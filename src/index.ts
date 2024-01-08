import express from "express";
import routes from "./routes";
import config from "./config";

const app = express();

// gets req.body
app.use(express.json());

app.use(routes);

console.log(`Server listening on port: ${config.serverPort}`);

app.listen(config.serverPort);
