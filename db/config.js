const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://admin-matt:Deakin2020@cluster0.gh01v.mongodb.net/iCrowdTaskDB?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() =>
      console.log("Connected to mongodb://localhost:27017/iCrowdTaskDB")
    )
    .catch(() =>
      console.log("Failed to connect to mongodb://localhost:27017/iCrowdTaskDB")
    );
};
