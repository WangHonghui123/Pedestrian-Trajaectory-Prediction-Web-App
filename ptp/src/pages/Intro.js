import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

//import logo image
import logo from "../assets/logo.svg"

const Intro = () => {
	return (
		<>
			<Container>
				<Row className="px-3">
					<Col>
						<img src={logo} alt="PTP" />
						<h1 className="text-secondary">pedestrain trajactory prediction</h1>
					</Col>
				</Row>
				<Row className="p-5">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta nemo atque ea quasi in ipsa eos fuga, quaerat ex ad facere, quas rem distinctio nesciunt quos impedit nam enim.
						Eveniet voluptatum magni repudiandae praesentium autem! Sunt dicta distinctio dolor aspernatur, hic maxime maiores aliquid ullam, aliquam explicabo excepturi. Commodi, deleniti assumenda perspiciatis voluptatem aut quod quam consectetur quibusdam pariatur.
						Suscipit dolor deserunt ipsum quam in architecto odit aliquid nulla rem, maiores deleniti libero laboriosam inventore nostrum officia magnam. Ea assumenda, error illo facilis animi architecto dolore tempora quas. Sint!
						Cumque similique architecto accusamus suscipit explicabo ut, rem tempora aperiam voluptate a eum ipsum. Dolor voluptatum neque sed aspernatur. Eum vel maiores nisi, temporibus fuga amet. Temporibus consequatur debitis tempora.
						Corporis sequi placeat totam aliquid id. Adipisci harum fugiat eius libero numquam ex culpa odio quisquam officia, quasi asperiores placeat quam ea esse minus saepe nostrum deleniti est quas earum.</p>
				</Row>
				<Row>
					<Button variant="primary" className="text-info "  href="/application">Start</Button>
				</Row>
			</Container>
		</>
	)
}

export default Intro;