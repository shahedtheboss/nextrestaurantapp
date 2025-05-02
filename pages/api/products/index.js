import dbConnect from "../../../util/db";
import Product from "../../../models/Product";
import nc from "next-connect";

dbConnect();

const handler = nc({
  onError: (err, req, res, next) => {
    console.log(err);
    res.statusCode(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
  }
}).post(async (req, res) =>{
  try{
    const product = await Product.create(req.body);
    res.status(201).json(product)
  }catch(err){
    res.status(500).json(err)
  }
})

export default handler;
