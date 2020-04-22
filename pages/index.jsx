import React from 'react';

const Home = () => (
  <div className="container">
    <button type="button" className="menu">
      MENU 
    </button>
    <style jsx> 
      {`
       @import url(http://fonts.googlepis.com/css?family=Nanum+Brush+Script);

      .menu {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 110px;
        height: 52px;
        background-color : #FFFFFF;
        border : 5px double #0F4C81;
        color : #0F4C81;
        font-family : 'Nanum Brush Script';
        font-weight : bold;
        font-size : 16px;
        border-radius : 2px 18px 2px 18px;
        transition : all 0.3s;
      }
      .menu:hover {
        border: 6px solid;
      }
      `}
    </style>
  </div>
);

export default Home;

