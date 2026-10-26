import React, {useState} from 'react';
import { Link } from '@inertiajs/react';
import { Navbar, Nav, Container, NavDropdown, Modal, Button } from 'react-bootstrap';


const TopBar = () => {

  return (
    <>
          <Navbar
            className='custom-topbar'
            style={{
              backgroundColor: '#c29522',
              '--bs-navbar-color': '#ffffff',
              '--bs-navbar-hover-color': 'rgba(255, 255, 255, 0.8)',
              '--bs-navbar-active-color': '#ffffff',
            }}
          >
            <Container className="d-flex justify-content-between align-items-center">

            {/* Title for small screens (centered) */}
            <Navbar.Brand className="mx-auto d-md-none fw-normal text-center">
                IMORA
            </Navbar.Brand>

            {/* Title for medium+ screens (left-aligned) */}
            <Navbar.Brand className="d-none d-md-block">
                IMORA
            </Navbar.Brand>

             {/* Nav links for medium+ screens only */}
            <Nav className="ms-auto d-none d-md-flex">
                <Nav.Link as={Link} href="/">Home</Nav.Link>
                <Nav.Link as={Link} href="/products-list">Products</Nav.Link>
            </Nav>

            </Container>
        </Navbar>

    </>
  );
};

export default TopBar;