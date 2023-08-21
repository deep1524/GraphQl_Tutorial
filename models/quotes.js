import mongoose from "mongoose";

const quotesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
   

})
const quotesModal=mongoose.model("Quotes", quotesSchema);
export default quotesModal;
