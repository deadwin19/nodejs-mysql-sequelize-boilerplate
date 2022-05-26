const express = require("express");
const cors = require("cors");
const helmet = require('helmet');

const app = express();
app.use(express.json());
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());
app.use(helmet());


var apiRouter = require('./routes/index'); 

app.use('/api/v1', apiRouter);

const port = Number(process.env.PORT || 4000);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sequelize Application."});
});

app.listen(port, () =>
    console.log(`🚀 Server running on port ${port}!`));