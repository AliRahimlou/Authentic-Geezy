import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import AeLogo from "../../assets/ae-logo2.png";
import "./footer.css";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small footer">
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          <img className="ae-logo-footer" src={AeLogo} alt=""></img>
          <div className="copy">
            &copy; {new Date().getFullYear()} AUTHENTIC EMPIRE MUSIC GROUP. ALL
            RIGHTS RESERVED.
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
