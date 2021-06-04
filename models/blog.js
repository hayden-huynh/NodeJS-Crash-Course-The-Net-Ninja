const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// The name of the model (first arg) will be automatically pluralized and the model will be linked with the collection with the same name if that exists. Through this model object we can issue various actions with the collection it is linked to
// 2nd arg: The structure (schema) of the documents we want to store in this collection
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
