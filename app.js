import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import NewProduct from "/Tentanto Estudar dnv/AddProtucts.js"

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log('Deu erro ao conectar ao MongoDB', error);
    }
};

app.get("/", function(req,res){
    res.send("Pagina inicial")
});

app.get("/produtos", async function(req,res){
   try {
    const produtos = await NewProduct.find();
    res.json(produtos)
   } catch (error) {
    
   }
});

app.post("/produtos", async (req, res) => {
    try {
        const newProduct = await NewProduct.create(req.body);
        res.json(newProduct);
} catch (error) {
    res.json({error: error});
}

})

app.put("/promocoes/:id", async (req,res) => {
    try {
        const promotion = await NewProduct.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true}
        );
        res.json(promotion) 
    } catch (error) {
        res.json({error: error })
    }
});


app.delete("/Remove/:id", async (req,res) => {
    try {
        const productDeleted = await NewProduct.findByIdAndDelete(
            req.params.id
        );
        res.json(promotion) 
    } catch (error) {
        res.json({error: error })
    }
});


app.listen(PORT, () => console.log(`o servidor está rodando na porta ${PORT}`));

connectDB();