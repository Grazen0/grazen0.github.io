import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Fireplace from '../../assets/Fireplace.gif';
import './NotFound.scss';

const NotFound = () => {
	const history = useHistory();

	return (
		<>
			<h1>End of the road 🚗</h1>
			<hr />
			<h4>Looks like you're lost! Try some of these out:</h4>
			<Button
				className="back-button"
				variant="success"
				onClick={() => window.history.back()}>
				Go Back
			</Button>
			<br />
			<Button
				className="back-button"
				variant="primary"
				onClick={() => history.push('/')}>
				Go to Main Page
			</Button>

			<br />

			<img className="fireplace text-light" src={Fireplace} alt="fireplace" />
		</>
	);
};

export default NotFound;
