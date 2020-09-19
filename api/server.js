const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const appRouter = require("./routes")(app);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

app.use("/", appRouter);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
