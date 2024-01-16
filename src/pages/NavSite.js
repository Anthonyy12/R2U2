import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavSite = (props) => {
  const handleLogout = () => {
    props.logout();
  }
  return (
    <header>
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container>
					<Navbar.Brand>Proyectos</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className='ms-md-auto'>
              <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
            </Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
  )
}

export default NavSite