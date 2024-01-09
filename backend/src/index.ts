import express from "express";
import routes from "./routes";
import config from "./config";
import { logger } from "./middleware/logger";
import { genericErrorHandler, notFoundError } from "./middleware/errorHandler";

const app = express();

// gets req.body
app.use(express.json());

app.use(logger);

app.use(routes);

app.use(genericErrorHandler);

app.use(notFoundError);

console.log(`Server listening on port: ${config.serverPort}`);

app.listen(config.serverPort);
