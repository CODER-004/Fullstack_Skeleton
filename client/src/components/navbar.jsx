import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function AppNavbar() {
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="border-b border-slate-800/50 backdrop-blur-xl bg-slate-950/70"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 text-white"
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            InterviewX
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-slate-700"
        />

        <Navbar.Collapse id="basic-navbar-nav">

          {/* Right */}
          <Nav className="ms-auto align-items-center gap-2">
            {isAuthenticated ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/profile"
                  className="text-slate-300 fw-medium"
                >
                  Profile
                </Nav.Link>

                <button
                  onClick={handleLogout}
                  className="border border-red-500/30 bg-red-500/10 text-red-400 px-4 py-2 rounded-lg fw-semibold hover:bg-red-500/20 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-slate-300 fw-medium"
                >
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Login
                  </span>
                </Nav.Link>

                <Link
                  to="/register"
                  className="text-decoration-none"
                >
                  <button className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-2 rounded-lg fw-semibold border-0 shadow-lg">
                    Get Started
                  </button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;