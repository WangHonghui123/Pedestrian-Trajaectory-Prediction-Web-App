import React from "react"
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

// import header & Footer
import Header from "../components/Header";
import Footer from "../components/Footer";

//import input button set and path canvas here
import Inputs from "../components/Inputs";
import PathCanvas from "../components/PathCanvas";

const Application = () => {
	return (
		<>
			<Container id="centerContent">
				<Row>
					<Header />
				</Row>

				<Row id="applicationContent" className="p-5">
					<Container>
						<Row>
							<Col className="border border-info">
								<Inputs />
							</Col>
							<Col className="border border-info">
								<PathCanvas />
							</Col>
						</Row>
					</Container>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</>
	)
}

export default Application;