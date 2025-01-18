const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/products', (req, res) => {
    res.send('Product created');
});

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

