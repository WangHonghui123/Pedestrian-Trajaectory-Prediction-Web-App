import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

//import logo image
import logo from "../assets/logo.svg"

const Intro = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<img src={logo} alt="PTP" />
						<h1>pedestrain trajactory prediction</h1>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Intro;