import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [coffee, setCoffee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // EDIT STATE
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    stock: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/coffee");
        setCoffee(res.data);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h3>Loading products...</h3>;
  }

  // DELETE
  const deleteCoffee = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/coffee/${id}`);
      setCoffee((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Coffee Products</h1>

      <input 
        type="text" 
        className="form-control mb-4"
        placeholder="Search for Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>

      {coffee.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((item) => (
        <div key={item.id} className="card mb-3 shadow-lg">
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">{item.description}</p>
            <p> <strong>Origin:</strong> {item.origin}</p>
            <p> <strong>Price:</strong> KES {item.price}</p>
            <p className={`fw-bold ${item.stock < 5 ? "text-danger" : "text-success"}`}>Stock: {item.stock}</p>
          </div>

          {/* DELETE */}
          <button
            onClick={() => deleteCoffee(item.id)}
            className="btn btn-danger"
          >
            Delete
          </button>

          {/* EDIT */}
          <button
            onClick={() => {
              setEditingId(item.id);
              setEditForm({
                name: item.name,
                price: item.price,
                stock: item.stock
              });
            }}
            className="btn btn-warning "
          >
            Edit
          </button>

          <hr />
        </div>
      ))}

      {/* EDIT FORM */}
      {editingId && (
        <div className="mt-4 p-3 border">
          <div className="card-body">
            <h3>Edit Product</h3>

            <input
              value={editForm.name}
              onChange={(e) =>
                setEditForm({ ...editForm, name: e.target.value })
              }
              className="form-control mb-2"
              placeholder="Name"
            />

            <input
              type="number"
              value={editForm.price}
              onChange={(e) =>
                setEditForm({ ...editForm, price: e.target.value })
              }
              className="form-control mb-2"
              placeholder="Price"
            />

            <input
              type="number"
              value={editForm.stock}
              onChange={(e) =>
                setEditForm({ ...editForm, stock: e.target.value })
              }
              className="form-control mb-2"
              placeholder="Stock"
            />

            {/* SAVE */}
            <button
              onClick={async () => {
                // update UI instantly
                setCoffee((prev) =>
                  prev.map((item) =>
                    item.id === editingId
                      ? {
                          ...item,
                          name: editForm.name,
                          price: Number(editForm.price),
                          stock: Number(editForm.stock)
                        }
                      : item
                  )
                );

                // update backend
                await axios.patch(
                  `http://localhost:3000/coffee/${editingId}`,
                  {
                    name: editForm.name,
                    price: Number(editForm.price),
                    stock: Number(editForm.stock)
                  }
                );

                setEditingId(null);
              }}
              className="btn btn-success"
            >
              Save Changes
            </button>

            <button
              onClick={() => setEditingId(null)}
              className="btn btn-secondary ms-2"
            >
              Cancel
            </button>
          </div>
        </div>
        )}
      </div>
    );
  }

export default Products;