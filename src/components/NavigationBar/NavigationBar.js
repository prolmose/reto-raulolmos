import React from "react";
import logo from 'assets/logo-dinkbit.png';

const { innerWidth: width, innerHeight: height } = window;

const NavigationBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: height > 768 ? '10%' : '5%',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: width > 480 ? '100%': '60%',
    height: height > 768 ? '5%' : '15%',
    backgroundColor: '#067CF7',
    borderBottom: 'white',
    fontWeight: "bold",
    padding: "0px 20px",
    opacity: 0.5,
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>
      <span>
        <img src={logo} style={{height: '30px'}} alt="logo" />
      </span>
      Atención inmediata: (+52) 55 22241607
      <span></span>
    </div>
  );
};

export default NavigationBar;