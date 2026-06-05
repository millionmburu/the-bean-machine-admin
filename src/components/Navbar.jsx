import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#48271a"}}>
            <div className="container">
                <Link className ="navbar-brand fw-bold text-white" to = "/" >
                    The Bean Machine 
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle ="collapse" data-bs-target="#nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to = "/"> Home</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link text-white" to = "/products"> Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to = "/add-product"> Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to = "/about"> About</Link>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default Navbar;