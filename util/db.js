import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

async function dbConnect(){
    try{
        await mongoose.connect(MONGODB_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connected to MongoDB");
    } catch(err){
        console.log(err);
    }
}

export default dbConnect