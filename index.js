const db = require("./models");
const server = require("./server.js");

const PORT = 8000;

async function startApp() {
  try {
    await db.sequelize.sync();
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    server.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
  }
}

startApp();
