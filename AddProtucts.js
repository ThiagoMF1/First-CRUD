import mongoose from "mongoose";

const NewProductSchema = new mongoose.Schema({
    nomeProduct: String,
    sectionProduct: String,
    valorProduct: Number,
});

export default mongoose.model('NewProduct', NewProductSchema);
