const express = require("express");

const blogController = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", blogController.blog_index);

// This endpoint must be above the "/blogs/:id" endpoint otherwise it will be understood that "create" is passed in for the parameter "id"
router.get("/create", blogController.blog_create_get);

// Without the colon, the URL will literally include "id". With the colon, "id" is interpreted as a parameter extracted from the route
router.get("/:id", blogController.blog_details);

router.post("/", blogController.blog_create_post);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
