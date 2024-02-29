import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
      default:
        "https://e7.pngegg.com/pngimages/608/57/png-clipart-shopping-cart-hypermarket-supermarket-wagon-shopping-cart-vehicle-car-park-thumbnail.png",
    },
    category: {
      type: String,
      required: false,
      default: "Uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    discountPrice: {
      type: Number,
      required: false,
      default: 0,
    },
    likes: {
      type: Array,
      default: [],
    },
    numberOfLikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Posts", postSchema);
export default Post;
