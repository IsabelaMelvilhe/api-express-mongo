import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type:String},
        nome: {type: String,required:true},
        nacionalidade: {type: String}
    },
    {
        versinKey:false
    }
)
const autores = mongoose.model("autores", autorSchema)

export default autores;

