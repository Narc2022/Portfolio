import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, I'm Sachin Singh, a passionate <b>Software Developer</b>{" "}
          specializing in <b>Front End Development</b>.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Narc2022" target="blank">
          <BsGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UClXZ6LP5dubwI1We2fVkE7g"
          target="blank"
        >
          <BsYoutube />
        </a>
        <a
          href="https://instagram.com/lets_get_programming_update?igshid=YmMyMTA2M2Y="
          target="blank"
        >
          <BsInstagram />
        </a>
        {/* <a href='https://www.linkedin.com/in/sachins' target='blank'>
				<BsLinkedin />
			</a> */}
      </div>
    </div>
  );
};

export default Footer;
