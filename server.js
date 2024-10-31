const express = require("express");
const app = express();

const { getTvIp } = require("./middlewares/getTvIp");

const authRouter = require("./routes/authRoutes");
const keyRouter = require("./routes/keyRoutes");
const powerRouter = require("./routes/powerRoutes");

app.use(express.json());

// extract the IP from the header
app.use(getTvIp);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/key", keyRouter);
app.use("/api/v1/power", powerRouter);

app.listen(3000, () => {
  console.log("Express server started on port 3000 ...");
});
