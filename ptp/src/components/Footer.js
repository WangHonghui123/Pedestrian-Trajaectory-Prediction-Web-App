import React from "react";
import { Container, Row, Col, Footer } from "react-bootstrap";

const infoFooter = () => {
	return (
		<>
			<Container id="footer" >
				<Row className="justify-content-end fs-6">
					<Col sm={1}>
						<a href="mailto:xuyizhi1996@gmail.com" className="link-info">Contact</a>
					</Col>
					<Col sm={1}>
						<a href="https://github.com/WangHonghui123/Pedestrian-Trajaectory-Prediction-Web-App" className="link-info">GitHub</a>
					</Col>
					<Col sm={2}>
						<p>version 0.1.0 Beta</p>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default infoFooter;