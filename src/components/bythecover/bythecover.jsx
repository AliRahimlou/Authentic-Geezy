import React from "react";
import {MDBRow, MDBCol } from "mdbreact";
import ByTheCover from '../../assets/bythecoveredit.jpg'
import './bythecover.css'

class ByTheCoverPic extends React.Component {
  render() {
    return (
 
        <MDBRow className="mb-4">
          <MDBCol md="12">
            <img src={ByTheCover} className=" by-the-cover" alt="" />
          </MDBCol>
        </MDBRow>
    
     
    );
  }
}

export default ByTheCoverPic;