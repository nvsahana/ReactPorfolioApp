import React from 'react';
import "./Main.css";
import sahana from "./assets/Sahana.jpeg";
function Main() {
  return (
    <div className='MainPage'>
      <div className='MainFlexContainer'>
        <div className='LeftFlex FlexBlock'>
          <div></div>
          <p>Sahana Narasipura Vasudevarao</p>
          <p>Description</p>
        </div>
        <div className="RightFlex FlexBlock">
          <div className="ImageContainer">
            <img src={sahana} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
