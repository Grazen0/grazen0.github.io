import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

const Header: React.FC = () => (
	<Navbar variant="dark" bg="dark" expand="md">
		<Navbar.Brand href="/#/">
			<img
				className="rounded-circle bg-secondary mr-3"
				style={{ height: 50 }}
				src="/favicon.ico"
				alt="favicon"
			/>
			Epic Website
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<NavDropdown title="Epic Generators" id="basic-nav-dropdown">
					<NavDropdown.Item href="/#/meme-generator">
						Meme Generator
					</NavDropdown.Item>
					<NavDropdown.Item href="/#/zalgo">Zalgo Text</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="Canvas Stuff" id="basic-nav-dropdown">
					<NavDropdown.Item href="/#/mouse-tracker">
						Mouse Tracker
					</NavDropdown.Item>
					<NavDropdown.Item href="/#/canvas">Canvas</NavDropdown.Item>
				</NavDropdown>

				<NavItem>
					<NavLink href="/#/notifications">Notification Sender</NavLink>
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Header;
