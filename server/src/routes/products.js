import express from "express";
import Product from "../models/Product.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.AWS_REGION;
const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_ACCESS_KEY_SECRET;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

router.post("/upload", upload.single("image"), async (req, res) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);

  req.file.buffer;

  const params = {
    Bucket: bucketName,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);

  res.send({});
});

// CREATE PRODUCT

// router.post("/create", async (req, res) => {
//   const data = req.body;
//   const product = new Product({
//     title: data.data.title,
//     description: data.data.description,
//     image: data.data.image,
//     category: data.data.category,
//     size: data.data.size,
//     color: data.data.color,
//     price: data.data.price,
//     inStock: data.data.inStock,
//   });

//   try {
//     const savedProduct = await product.save();
//     res.status(200).json({
//       data: savedProduct,
//       error: "",
//     });
//   } catch (error) {
//     res.status(400).json({
//       data: "",
//       error: error.message,
//     });
//   }
// });

// EDIT PRODUCT

// router.put("/edit", async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json({
//       data: updatedProduct,
//       error: "",
//     });
//   } catch (error) {
//     res.status(400).json({
//       data: "",
//       error: error.message,
//     });
//   }
// });

// GET PRODUCT

// router.get("/:params", async (req, res) => {
//   try {
//     const getProduct = await Product.findOne();
//     if (!getProduct) {
//       return res.status(400).json({
//         data: "",
//         error: "No Product Found",
//       });
//     }
//     res.status(200).json({
//       data: getProduct,
//       error: "",
//     });
//   } catch (error) {
//     return res.status(400).json({
//       data: "",
//       error: error.message,
//     });
//   }
// });
export default router;
