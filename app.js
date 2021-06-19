const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const mongoDb = require("./credentials");
const blogRouters = require('./routes/blogRoutes')

// Express app
const app = express();

// Register View Engine
app.set("view engine", "ejs");

// Connect to MongoDB Atlas
const dbURI = `mongodb+srv://${mongoDb.username}:${mongoDb.password}@cluster0.opd4g.mongodb.net/node-crash-course?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to DB");

    // Listen for requests at specified port. Only start listening to requests after DB has been connected
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// ========== MIDDLEWARE ==========
// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next(); // Tell Express to move on to the next middleware
// });

// app.use((req, res, next) => {
//   console.log('in the next middleware');
//   next(); // Tell Express to move on to the next middleware
// });

// Middleware and static files. Everything inside the public folder will be accessible from the front-end
app.use(express.static("public"));

// Third-party middleware
app.use(morgan("dev"));

// Necessary middleware to parse data received from front-end to an object readable in JavaScript. Need this to handle POST request properly
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "New Blog 2",
//     snippet: "About my new blog",
//     body: "More about my new blog",
//   });

//   // Persist to remote database
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("60b9ead8e4c5d9ae002b6dea")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  // Express automatically set the Content-Type head accordingly to what is sent back
  // res.send('<p>Homepage</p>');

  // Express finds absolute path so we need to provide the root equal to the full path of the current directory
  // res.sendFile("./views/index.html", { root: __dirname });

  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  // Render a view. Express will automatically look into the views folder
  // res.render("index", { title: "Home", blogs });

  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// Redirection
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

// Any URLs that start with "/blogs" will be routed into here. We no longer need to specify "/blogs" at the beginning of the URLs in each handler but rather just what is remaining.
app.use("/blogs", blogRouters);

// 404 Page
// If the request does not match any endpoints above, this handler will be triggered regardless of what the URL in the request is
// When an endpoint is matched/reached by the request, all endpoints declared below will be ignored and not executed. Therefore, this `use` hanlder should always be the final one to be declared
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
