import React, { useEffect } from "react";
import "./ProductDetails.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const ProductDetails = ({ category, fields }) => {
  
const navigate = useNavigate();
  useEffect(() => {
    const form = document.getElementById("post_product_details");
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const formDataObject = {};
  
      for (let pair of formData.entries()) {
        const key = pair[0];
        const value = pair[1];
        formDataObject[key] = value;
      }
  
      console.log('Form Data Object:', formDataObject);
  
      try {
        const response = await fetch("http://localhost:5000/api/products/add", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        navigate('/');
        toast.success("Product added successfully")
        const result = await response.json();

        console.log("Server Response:", result);
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    };
  
    form.addEventListener("submit", submitHandler);
  
    return () => {
      form.removeEventListener("submit", submitHandler);
    };
  }, []);
  
  return (
    <form id="post_product_details" className="form-container">
      <div className="form-section">
        <h3>INCLUDE SOME DETAILS</h3>
        {fields.map((field, idx) => {
          switch (field.type) {
            case "enum":
              return (
                <div className="form-group" key={idx}>
                  <label className="form-label">{field.name} *</label>
                  <select
                    name={field.name.toLowerCase()}
                    className="form-input"
                    required={field.required}
                  >
                    <option value="">Select</option>
                    {field.enum.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case "number":
            case "text":
              return (
                <div className="form-group" key={idx}>
                  <label className="form-label">{field.name} *</label>
                  <input
                    name={field.name.toLowerCase()}
                    type={field.type}
                    className="form-input"
                    placeholder={`Enter ${field.name.toLowerCase()}`}
                    required={field.required}
                  />
                </div>
              );
            case "array":
              return (
                <div className="form-group file-upload" key={idx}>
                  <label className="form-label">{field.name}</label>
                  <div className="file-grid">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="file-box">
                        <span className="add-photo">Add Photo</span>
                        <input
                          type="file"
                          name={`${field.name.toLowerCase()}[]`}
                          className="file-input"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="form-section">
        <h3>SET A PRICE</h3>
        <div className="form-group">
          <label className="form-label">Price *</label>
          <input
            name="price"
            type="number"
            className="form-input"
            placeholder="Enter price"
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h3>CONFIRM YOUR LOCATION</h3>
        <div className="form-group">
          <label className="form-label">State *</label>
          <select name="state" className="form-input" required>
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>
      </div>

      <button type="submit" className="submit-button">
        Post now
      </button>
    </form>
  );
};

export default ProductDetails;
