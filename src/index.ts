import "./preStart"; // Must be the first import
import logger from "jet-logger";

import app from "./app";

// Constants
const serverStartMsg = "Express server started on port: ";

const API_PORT = 8080;

// Start server
app.listen(API_PORT, () => {
  logger.info(`${serverStartMsg}${API_PORT}`);
});
