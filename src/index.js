const express = require('express');
const carRoutes = require('./routes/carRoutes')

const PORT = 5000;
const app = express();

// Middleware
app.use(express.json());

app.use("/car", carRoutes);

app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})