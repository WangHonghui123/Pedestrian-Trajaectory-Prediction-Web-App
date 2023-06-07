import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Inputs = () => {
	return (
		<>
			<Form>
				<Form.Group className="mb-3" controlId="dataFrameN">
					<Form.Label>Please input data frame N:</Form.Label>
					<Form.Control type="text" placeholder="data Frame N" />
					<Form.Text className="text-info">
						Help info here.
					</Form.Text>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	)
}

export default Inputs;