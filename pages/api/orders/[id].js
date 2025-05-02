import dbConnect from '../../../util/db'
import Order from '../../../models/Order'

const handler = async (req, res) =>{
    const {
        method,
        query: {id}
    } = req ;
    await dbConnect()

    if(method  === "GET"){
        try{
            const order = await Order.findById(id);
            res.status(200).json(order)
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    }
}

export default handler