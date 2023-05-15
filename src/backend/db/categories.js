import { v4 as uuid } from "uuid";
import category1Image from "../../../src/assets/Home/Categories/category1.jpg";
import category2Image from "../../../src/assets/Home/Categories/category2.jpg";
import category3Image from "../../../src/assets/Home/Categories/category3.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Camera",
    description:
      "Professional Aerial and Ground Filmmaking Tools for Professionals",
      categoryImage: category1Image,
  },
  {
    _id: uuid(),
    categoryName: "Mini",
    description:
      "Compact and Portable Drones for Recreational fun activities",
      categoryImage: category2Image,
  },
  {
    _id: uuid(),
    categoryName: "Agriculture",
    description:
      "Drones Designed for Precision Farming and Better Crop Management",
      categoryImage: category3Image,
  },
];
