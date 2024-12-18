const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');
const cors = require('cors');
const multer = require("multer");
const path = require('path')
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors({
  origin: 'http://localhost:5173', 
}));

connectDB();

app.use(express.json());

app.use("/api/products", upload.any(), productsRoutes); 

app.use("/api/category", categoryRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
