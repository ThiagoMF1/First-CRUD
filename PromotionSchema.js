import mongoose from "mongoose";

const promotionProductSchema = new mongoose.Schema({
    nameProduct: String,
    sectionProduct: String,
    currentValor: Number,
    newValor: Number,
});

export default mongoose.model("PromotionProduct", promotionProductSchema);