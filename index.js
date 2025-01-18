const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/products', async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

app.get('/api/products/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.post('/api/products', async(req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);


  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

// Update

app.put('/api/products/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: 'Product not found'});
        }
        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);

    } catch (err) {

        res.status(500).json({message: err.message});
    }
});

app.delete('/api/products/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message: 'Product not found'});
        }
        const deletedProduct = await Product.findById(id);
        res.status(200).json({message: 'Product deleted successfully', product: deletedProduct});

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}   );

mongoose.connect("mongodb+srv://MOLOY-NODE:mongodb2025@node-api.qoofc.mongodb.net/?retryWrites=true&w=majority&appName=NODE-API")

.then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

})
.catch((err) => {
    console.log('MongoDB connection error', err);
});

