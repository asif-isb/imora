import React, { useState, useEffect  } from 'react';
import { Navbar, Nav, NavDropdown, Container, Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faShoppingCart, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/js/Context/CartContext';
import CartItems from '@/js/Components/CartItems';
import SearchForm from '@/js/Components/SearchForm';
import Logo from '@/images/logo.png';
import LogoSmall from '@/images/logo-im.jpeg';
import axios from 'axios';

function Header({ menus = [] }) {
const [showCart, setShowCart] = useState(false);
const [showSearch, setShowSearch] = useState(false);
const [showMenu, setShowMenu] = useState(false);
const [phone, setPhone] = useState("Loading...");
const { items } = useCart();
const itemCount = items.length;
const dropdownMenus = menus.slice(-6);

// Fetch phone number from API
  useEffect(() => {
    axios.get('/api/settings/phone')
      .then(response => {
        setPhone(response.data.phone || "N/A");
      })
      .catch(error => {
        console.error("Failed to fetch phone number", error);
        setPhone("N/A");
      });
  }, []);

return (
<header className='header' style={{ position: 'relative', zIndex: 1030 }}>
    <Container>
        <Row className="align-items-center justify-content-between">
            {/* Menu toggle (mobile only, left side) */}
            <Col xs={4} className="d-md-none">
            <button
                type="button"
                className="btn p-0 border-0 bg-transparent"
                onClick={() => setShowMenu(!showMenu)}
                aria-label="Toggle menu"
            >
                <FontAwesomeIcon icon={showMenu ? faTimes : faBars} style={{ color: '#fff', fontSize: '1.5rem' }} />
            </button>
            </Col>

            {/* Logo: small logo centered on mobile, large logo on md+ */}
            <Col xs={4} md="auto" className="text-center text-md-start">
            <a href="/">
                <img src={Logo} height="80" className="d-none d-md-inline-block align-top" alt="company logo" />
                <img src={LogoSmall} height="50" className="d-md-none align-top" alt="company logo" />
            </a>
            </Col>

            {/* Center: Main menu (desktop only) */}
            <Col className="d-none d-md-flex justify-content-center">
                <Nav
                    className="align-items-center"
                    style={{
                        '--bs-nav-link-color': '#ffffff',
                        '--bs-nav-link-hover-color': 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    {dropdownMenus.map((menu) =>
                        menu.children && menu.children.length > 0 ? (
                            <NavDropdown
                                title={menu.title}
                                id={`nav-dropdown-${menu.id}`}
                                key={menu.id}
                                className="fw-bold"
                            >
                                {menu.children.map((sub) => (
                                    <NavDropdown.Item
                                        as={Link}
                                        href={sub.link || "#"}
                                        key={sub.id}
                                    >
                                        {sub.title}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        ) : (
                            <Nav.Link
                                as={Link}
                                href={menu.link || "#"}
                                key={menu.id}
                                className="fw-bold"
                            >
                                {menu.title}
                            </Nav.Link>
                        )
                    )}
                </Nav>
            </Col>

            {/* Search icon + Contact (desktop only) + Cart: right side */}
            <Col xs={4} md="auto" className="d-flex align-items-center justify-content-end gap-3 ms-md-auto">
            {/* Search icon (opens popup) */}
            <button
                type="button"
                className="btn p-0 border-0 bg-transparent me-md-3"
                onClick={() => setShowSearch(true)}
                aria-label="Search"
            >
                <FontAwesomeIcon icon={faSearch} style={{ color: '#fff', fontSize: '1.4rem', cursor: 'pointer' }} />
            </button>

            {/* Contact (hidden on mobile) */}
            <div className="d-none d-md-block">
                <div className='header-contact'>
                    <FontAwesomeIcon icon={faPhone} className="header-phone me-3" style={{ color: '#9b5d24' }} />
                    <div>
                        <label className="d-block mb-0">Contact Us</label>
                        <span style={{ color: '#fff' }}>{phone}</span>
                    </div>
                </div>
            </div>


            {/* Cart */}
            <div className="cart-icon-wrapper" onClick={()=> setShowCart(true)}>
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"
                    style={{ color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }} />
                {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
                )}
            </div>
            </Col>
        </Row>

        {/* Mobile menu (below header row, left aligned, white text) */}
        {/* Mobile menu (floats over content, left aligned, white text, black background) */}
        {showMenu && (
            <div
                className="d-md-none pb-2 text-start"
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: '#000',
                    zIndex: 1030,
                }}
            >
                {dropdownMenus.map((menu) => (
                    <div key={menu.id}>
                        <Link
                            href={menu.link || "#"}
                            className="mobile-menu-link d-block py-2 px-3 fw-bold text-decoration-none"
                            style={{ color: '#fff' }}
                        >
                            {menu.title}
                        </Link>
                        {menu.children && menu.children.length > 0 && menu.children.map((sub) => (
                            <Link
                                key={sub.id}
                                href={sub.link || "#"}
                                className="mobile-menu-link d-block py-1 pe-3 ps-5 text-decoration-none"
                                style={{ color: '#fff' }}
                            >
                                {sub.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        )}
    </Container>

    {/* Search Popup */}
    <Modal show={showSearch} onHide={() => setShowSearch(false)} centered>
        <Modal.Body>
            <SearchForm />
        </Modal.Body>
    </Modal>

    {/* Cart Drawer */}
    <div className={`cart-drawer-backdrop ${showCart ? 'show' : '' }`} onClick={()=> setShowCart(false)}
        />
        <div className={`cart-drawer ${showCart ? 'show' : '' }`}>
            <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Shopping Cart</h5>
                <button type="button" className="btn-close" onClick={()=> setShowCart(false)}
                    aria-label="Close"
                    />
            </div>
            <div className="cart-drawer-body">
                <CartItems onClose={()=> setShowCart(false)} />
            </div>
        </div>
</header>
);
}

export default Header;