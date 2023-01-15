import mongoose from "mongoose"
mongoose.connect("mongodb+srv://matheus:123@alura.r32c0rt.mongodb.net/alura-node");
let db = mongoose.connection;
export default db;