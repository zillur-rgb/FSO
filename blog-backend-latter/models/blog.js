const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

/**
 * Schema declaration for blog
 */
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: [6, "Must be at least 6 but got {VALUE}"],
    },
    image: {
      type: String,
      required: true,
    },
    category: [String],
    desc: {
      type: String,
      min: 12,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

/**
 * Removing _id and _v from the schema so that we can
 * filter based on id instead of _id. However __id and
 * __v will still be included in the main database collection.
 */
blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Blog", blogSchema);
