import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-center text-white p-5 rounded-5 "
        style={{ backgroundColor: "#48271A" }}
      >
        <h1 className="display-4 fw-bold">
          Welcome to The Bean Machine
        </h1>

        <p className="lead mt-3">
          Manage inventory, pricing, and products from one
          centralized dashboard.
        </p>

        <div className="mt-4">
          <Link className="btn btn-light me-3" to ="/products">
            View Products
          </Link>

          <Link className="btn btn-outline-light" to = "add-product">
            Add Product
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="row mt-5">

        <div className="col-md-3 mb-3">
          <div className="card h-100 shadow-lg bg-dark text-white">
            <div className="card-body text-center">
              <h5> Inventory</h5>
              <p>Inspect Coffee Stock.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card h-100 shadow-lg bg-dark text-white" >
            <div className="card-body text-center">
              <h5> Pricing</h5>
              <p>Update product prices</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card h-100 shadow-lg bg-dark text-white">
            <div className="card-body text-center">
              <h5> Search</h5>
              <p>Find products</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card h-100 shadow-lg bg-dark text-white">
            <div className="card-body text-center">
              <h5> Admin Tools</h5>
              <p>Manage the entire catalog.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;