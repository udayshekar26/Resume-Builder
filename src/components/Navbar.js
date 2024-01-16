import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-between" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    <div>
                        {/* Use Link component to navigate to Resume Templates */}
                        <Link to="/" className="navbar-brand">MyResume</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Resume Templates</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/my-resumes" className="nav-link">My Resumes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-link">About us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
