const Car = require('../models/CarModel'); 
const path = require('path');
const fs = require('fs'); 

exports.getProducts = async (req, res) => {
    try {
      const products = await Car.find();
      res.json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch products." });
    }
};

exports.addProduct = async (req, res) => {
  console.log('Add product function called');
  
  console.log("Form Fields (req.body):", req.body);
  
  console.log("Uploaded Files (req.files):", req.files);

  try {
    const { brand, year, fuel, transmission, km_driven, price, ad_title, description } = req.body;
    
    const imagePaths = req.files.map(file => {
      const uploadPath = path.join(__dirname, '../uploads', file.originalname);

      fs.writeFileSync(uploadPath, file.buffer);

      return `/uploads/${file.originalname}`;
    });

    const newCar = new Car({
      brand,
      year,
      fuel,
      images: imagePaths, 
      transmission,
      km_driven,
      price: price[0],
      ad_title,
      description,
    });

    await newCar.save();

    res.json({
      success: true,
      message: "Product data received and stored successfully!",
      product: newCar, 
    });
    
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to store product data",
    });
  }
};
