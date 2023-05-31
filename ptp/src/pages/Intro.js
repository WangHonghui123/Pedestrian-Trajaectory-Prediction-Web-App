import React from "react"
import { Link } from "react-router-dom"

const Intro = () => {
	return (
		<div>
			<h1>Title</h1>
			<p>introduction text here</p>
			<Link to={"/application"}>Start</Link>
		</div>
	)
}

export default Intro;