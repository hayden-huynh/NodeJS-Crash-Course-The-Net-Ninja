const express = require("express");

// Express app
const app = express();

// Listen for requests at specified port
app.listen(3000);

app.get("/", (req, res) => {
  // Express automatically set the Content-Type head accordingly to what is sent back
  // res.send('<p>Homepage</p>');

  // Express finds absolute path so we need to provide the root equal to the full path of the current directory
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// Redirection
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

// 404 Page
// If the request does not match any endpoints above, this handler will be triggered regardless of what the URL in the request is
// When an endpoint is matched/reached by the request, all endpoints declared below will be ignored and not executed. Therefore, this `use` hanlder should always be the final one to be declared
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
