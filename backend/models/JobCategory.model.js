const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobCategorySchema = new Schema(
  {
    name: {
      type: String,
      default: null,
      required: true,
    },
    slug: {
      type: String,
      default: null,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("JobCategory", jobCategorySchema);
