import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Isabela:admin@cluster0.wnt2yvh.mongodb.net/alura-node");

let db = mongoose.connection;

export default db; 

