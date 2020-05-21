import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import AlbumArt from '../../assets/album-cover.jpg'
import './album-art.css'

class AlbumPic extends React.Component {
  render() {
    return (
      
      
        <MDBRow className="">
          <MDBCol md="6">
            <img src={AlbumArt} className="img-fluid album-cover" alt="" />
          </MDBCol>
        </MDBRow>
    
      
    );
  }
}

export default AlbumPic;