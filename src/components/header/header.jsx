import image from "../../assets/header.jpg";

import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

import './header.css'

class HoverPic extends React.Component {
  render() {
    return (
        
      <div className="imgcont">
        <MDBRow className="">
          <MDBCol md="12">
              <img className='img'
                src={image}
                alt=""
              />
        
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default HoverPic;
