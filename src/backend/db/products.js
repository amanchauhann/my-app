import { v4 as uuid } from "uuid";
import camera1 from "../../assets/Products/Camera/camera1.jpg"
import camera2 from "../../assets/Products/Camera/camera2.jpg"
import camera3 from "../../assets/Products/Camera/camera3.png"
import camera4 from "../../assets/Products/Camera/camera4.png"
import camera5 from "../../assets/Products/Camera/camera5.png"

import mini1 from "../../assets/Products/Mini/mini1.jpg"
import mini2 from "../../assets/Products/Mini/mini2.jpg"
import mini3 from "../../assets/Products/Mini/mini3.jpg"
import mini4 from "../../assets/Products/Mini/mini4.jpg"
import mini5 from "../../assets/Products/Mini/mini5.jpg"

import agriculture1 from "../../assets/Products/Agriculture/agriculture1.jpg"
import agriculture2 from "../../assets/Products/Agriculture/agriculture2.jpg"
import agriculture3 from "../../assets/Products/Agriculture/agriculture3.png"
import agriculture4 from "../../assets/Products/Agriculture/agriculture4.jpg"
import agriculture5 from "../../assets/Products/Agriculture/agriculture5.jpg"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "SkyCam X200",
    brand: "DroneTech",
    price: "1000",
    categoryName: "camera",
    ratings: "4",
    weight: "4.5",
    productImage: camera1,
    availability: true,
    description: "Capture stunning aerial footage and photos with the versatile SkyCam X200 camera drone.",
    reviewedBy: 7692
  },
  {
    _id: uuid(),
    title: "AeroVision 500",
    brand: "SkyWorks",
    price: "2000",
    categoryName: "camera",
    ratings: "5",
    weight: "2.3",
    productImage: camera2,
    availability: true,
    description: "Experience professional-grade aerial photography with the AeroVision 500 drone's 4K capabilities.",
    reviewedBy: 3267
  },
  {
    _id: uuid(),
    title: "PixelDrone 4K",
    brand: "TechFly",
    price: "3000",
    categoryName: "camera",
    ratings: "4",
    weight: "1.7",
    productImage: camera3,
    availability: true,
    description: "Unleash your creativity with the PixelDrone 4K, a high-performance drone equipped with a powerful 4K camera.",
    reviewedBy: 8884
  },
  {
    _id: uuid(),
    title: "CineWing Pro",
    brand: "CineDrone",
    price: "4000",
    categoryName: "camera",
    ratings: "3",
    weight: "3.8",
    productImage: camera4,
    availability: false,
    description: "Capture cinematic aerial footage with the professional-grade CineWing Pro drone.",
    reviewedBy: 5841
  },
  {
    _id: uuid(),
    title: "ZoomCam Z1",
    brand: "ZoomTech",
    price: "5000",
    categoryName: "camera",
    ratings: "4",
    weight: "0.9",
    productImage: camera5,
    availability: true,
    description: "Get closer to your subjects with the ZoomCam Z1, a compact drone featuring a powerful zoom lens.",
    reviewedBy: 2345
  },
  {
    _id: uuid(),
    title: "NanoFlyer Mini",
    brand: "NanoDrones",
    price: "100",
    categoryName: "mini",
    ratings: "4",
    weight: "0.3",
    productImage: mini1,
    availability: true,
    description: "Enjoy indoor flying and learn the basics with the small and lightweight NanoFlyer Mini drone.",
    reviewedBy: 9738
  },
  {
    _id: uuid(),
    title: "MicroCopter S2",
    brand: "MicroDynamics",
    price: "200",
    categoryName: "mini",
    ratings: '3',
    weight: '0.6',
    productImage: mini2,
    availability: true,
    description: "Experience agile and maneuverable flights with the compact MicroCopter S2 drone.",
    reviewedBy: 4567
  },
  {
    _id: uuid(),
    title: "TinyGlider E1",
    brand: "GliderTech",
    price: "300",
    categoryName: "mini",
    ratings: "5",
    weight: "0.8",
    productImage: mini3,
    availability: true,
    description: "Soar through the skies with the TinyGlider E1, a mini drone designed for smooth and stable flights.",
    reviewedBy: 5432
  },
  {
    _id: uuid(),
    title: "PocketFlyer X4",
    brand: "PocketDrones",
    price: "400",
    categoryName: "mini",
    ratings: "2",
    weight: "0.5",
    productImage: mini4,
    availability: false,
    description: "Take the PocketFlyer X4 mini drone with you anywhere, perfect for on-the-go adventures.",
    reviewedBy: 6789
  },
  {
    _id: uuid(),
    title: "NanoQuad Q5",
    brand: "NanoDynamics",
    price: "500",
    categoryName: "mini",
    ratings: "4",
    weight: "0.7",
    productImage: mini5,
    availability: true,
    description: "Experience agile and fun flights with the NanoQuad Q5, a compact and reliable mini drone.",
    reviewedBy: 4321
  },
  {
    _id: uuid(),
    title: "FarmScout F10",
    brand: "AgriDrone",
    price: 7500,
    categoryName: "agriculture",
    ratings: 4,
    weight: 4.8,
    productImage: agriculture1,
    availability: true,
    description: "Optimize your farming operations with the FarmScout F10 agriculture drone.",
    reviewedBy: 9876
  },
  {
    _id: uuid(),
    title: "CropMaster C300",
    brand: "CropTech",
    price: 8500,
    categoryName: "agriculture",
    ratings: 5,
    weight: 3.2,
    productImage: agriculture2,
    availability: true,
    description: "Achieve higher crop yields and precise field mapping with the CropMaster C300 agriculture drone.",
    reviewedBy: 7654
  },
  {
    _id: uuid(),
    title: "FieldRanger FR500",
    brand: "FarmDrones",
    price: 6500,
    categoryName: "agriculture",
    ratings: 4,
    weight: 5.5,
    productImage: agriculture3,
    availability: false,
    description: "Improve your farm management with the powerful and advanced FieldRanger FR500 agriculture drone.",
    reviewedBy: 5432
  },
  {
    _id: uuid(),
    title: "HarvestEye H800",
    brand: "HarvestTech",
    price: 9500,
    categoryName: "agriculture",
    ratings: 3,
    weight: 6.8,
    productImage: agriculture4,
    availability: true,
    description: "Enhance your harvest efficiency and crop analysis with the HarvestEye H800 agriculture drone.",
    reviewedBy: 7890
  },
      {
      _id: uuid(),
      title: "AquaSense A200",
      brand: "AgroDrones",
      price: 5000,
      categoryName: "agriculture",
      ratings: 4,
      weight: 2.5,
      productImage: agriculture5,
      availability: false,
      description: "Monitor water resources and irrigation systems with the AquaSense A200 agriculture drone.",
      reviewedBy: 9990
      }
];
