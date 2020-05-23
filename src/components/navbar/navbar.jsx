import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import geezylogo from "../../assets/geezylogo.png";
import AeLogo from "../../assets/ae-logo2.png";

import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const bgPink = { backgroundColor: "black" };
    const container = { height: 1300 };
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar className='navbar' style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand >

                <img className="ae-logo" src={AeLogo} alt=''></img>
                <strong className="presents">Authentic Empire Presents</strong>
                
                <img className="geezy-logo" src={geezylogo} alt=''></img>

                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <MDBIcon id='fb' fab icon="facebook-f" />
                </a>

                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> 
                  <MDBIcon id='twitter' fab icon="twitter" />
                </a>

                <a href="https://instagram.com/geezydiegoescobar?igshid=1i9upjuvrfky8" target="_blank" rel="noopener noreferrer">
                  <MDBIcon id='insta' fab icon="instagram" />
                </a>

              </MDBNavbarBrand>

            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default Navbar;
