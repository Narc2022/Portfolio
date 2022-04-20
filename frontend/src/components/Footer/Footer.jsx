import React from 'react'
import "./Footer.css"
const Footer = () => {
	return (
		<div className="footer">
		<div>
			<Typography variant="h5">About Me</Typography>
			<Typography>
				Hey, my name is Sachin Singh.I am a Full-Stack Developer and a tutorial on Youtube channel called <br>naRc Tech</br> 
			</Typography>

			<Link to="/contact" className="footerContactBtn">
			<Typography>Contact Us</Typography>
			</Link>
		</div>
		</div>
	)
}

export default Footer