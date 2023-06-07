import React from "react";
//import logo image
import logo from "../assets/logo.svg";

import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
	return (
		<Container>
			<Row>
				<Col sm={2}>
					<img src={logo} className="w-100" alt="PTP" />
				</Col>
				<Col sm={8}>
					<h1 className="text-secondary">pedestrain trajactory prediction</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default Header;