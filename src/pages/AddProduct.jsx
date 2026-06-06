import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: "",
    stock: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price) {
      alert("Name and Price are required!");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("coffee")
        .insert([
          {
            name: formData.name,
            description: formData.description,
            origin: formData.origin,
            price: Number(formData.price),
            stock: Number(formData.stock)
          }
        ])
        .select();

      if (error) {
        console.log("POST ERROR:", error);
        alert("Failed to add product");
        return;
      }

      console.log("POST SUCCESS:", data);

      alert("Product added successfully!");

      setFormData({
        name: "",
        description: "",
        origin: "",
        price: "",
        stock: ""
      });

      navigate("/products");

    } catch (error) {
      console.log("POST ERROR:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add Coffee Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="origin"
          value={formData.origin}
          placeholder="Origin"
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="price"
          value={formData.price}
          placeholder="Price"
          type="number"
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="stock"
          value={formData.stock}
          placeholder="Stock"
          type="number"
          onChange={handleChange}
          className="form-control mb-2"
        />

        <button
          className="btn btn-dark btn-outline-info mb-3"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>

      </form>
    </div>
  );
}

export default AddProduct;