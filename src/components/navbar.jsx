import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ModalComponent from "./modal";
import FormRegister from "./form";

import React, { useState } from "react";
const NavbarHeader = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/shop"
              >
                shop
              </Link>
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              onClick={() => setModalShow(true)}
            >
              Modal
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"Register"}
      >
        <FormRegister />
      </ModalComponent>
    </Navbar>
  );
};

export default NavbarHeader;
