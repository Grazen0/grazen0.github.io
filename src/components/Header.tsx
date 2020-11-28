import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
				<NavItem>
					<NavLink href="/#/meme-generator">Meme Generator</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/#/notifications">Notification Sender</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/#/mouse-tracker">Mouse Tracker</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/#/canvas">Canvas</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/#/zalgo">Zalgo Text</NavLink>
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Header;
