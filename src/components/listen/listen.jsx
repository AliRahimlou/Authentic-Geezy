// import image from "../../assets/album-cover.jpg";
// import bythecover from "../../assets/bythecoveredit.jpg";
import AlbumPic from "../album-art/album-art";
import ByTheCoverPic from "../bythecover/bythecover";

import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import "./listen.css";

class AlbumCover extends React.Component {
  btnClick() {
    window.open("https://www.youtube.com/watch?v=_4QNyzBl5k0&feature=youtu.be");
}
  render() {
    return (
    

      <div className="imgcont">
      <MDBRow className="">
        <MDBCol md="12">
        <ByTheCoverPic />
         <AlbumPic />
         <button className="listen-button" onClick={this.btnClick.bind(this)}>LISTEN NOW</button>
      
        </MDBCol>
      </MDBRow>
    </div>
    );
  }
}

export default AlbumCover;
