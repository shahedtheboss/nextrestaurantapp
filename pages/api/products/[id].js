import dbConnect from '../../../util/db'
import Product from '../../../models/Product'

const handler = async (req, res) =>{
    const {
        method,
        query: {id}
    } = req ;
    await dbConnect()

    if(method  === "GET"){
        try{
            const product = await Product.findById(id);
            res.status(200).json(product)
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    }

    if(method === "DELETE"){
        try{
            const product = await Product.findByIdAndDelete(id)
            res.status(201).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }

}
export default handler