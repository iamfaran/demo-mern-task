import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingBag, FaUser } from "react-icons/fa";

import LOGO from "/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand as="span" className="d-flex align-items-center">
            <img src={LOGO} alt="logo" width={40} />
            <span>Mern Shop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="px-2" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as="span"
                className="position-relative d-flex align-items-center gap-1"
              >
                <Badge pill bg="secondary" className="position-absolute">
                  0
                </Badge>
                <FaShoppingBag />
                Cart
              </Nav.Link>
              <Nav.Link as="span" className="d-flex align-items-center gap-1">
                <FaUser />
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
