import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Ritik Coder...</div>
      <div>
        <Link to={"https://www.facebook.com/share/oHKurbUvJzL3DUpm/?mibextid=qi2Omg"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/ritik0101"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/ritik-limje-80abb424b"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/ritik_limje?utm_source=qr&igsh=aWswenFoNnI5b25s"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
