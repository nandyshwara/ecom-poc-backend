const { dbConnect } = require("./database/dbConnect");
const app = require("./app");

dbConnect();

const port = 8080;

app.listen(port, () => {
  console.log("Server is running on the port", port);
});
