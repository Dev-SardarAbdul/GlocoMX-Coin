import { StyledTopbar } from "./topbarStyle";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//assets
import mainlogo from "../assets/images/mainlogo.png";

const Topbar: React.FC = () => {
  return (
    <StyledTopbar>
      <Navbar expand="lg" variant="dark" bg="none">
        <Container>
          <Navbar.Brand href="/#">
            <img src={mainlogo} className="img-fluid" alt="Responsive " />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav navbar-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/shop">Shop</Link>
              </Nav.Link>
              <Nav.Link href="/#tokens">Tokens</Nav.Link>
              <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/#roadmap">Roadmap</Nav.Link>
              <Nav.Link href="/#faq">FAQ</Nav.Link>
              <Nav.Link href="/#team">Team</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledTopbar>
  );
};

export default Topbar;
