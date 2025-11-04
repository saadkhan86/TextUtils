import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
export default function Navbar({ mode = "light", toggler }) {
  const currentpg = useLocation();
  return (
    <>
      <nav
        className={`navbar py-2 navbar-expand-lg navbar-dark`}
        style={{
          background: `${
            mode === "light" ? "var(--bs-blue-300)" : "var(--bs-gray-600)"
          }`,
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TestUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={currentpg.pathname === "/about" ? "/home" : "/about"}
                >
                  {currentpg.pathname === "/about" ? "Home" : "About"}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={toggler}
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
              <label
                className="form-check-label text-light"
                htmlFor="switchCheckDefault"
              >
                {mode === "light" ? "Dark mode" : "Light mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggler: PropTypes.func,
};
