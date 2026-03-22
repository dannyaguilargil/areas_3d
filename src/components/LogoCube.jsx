import React from 'react';
import './Nav.css';

function LogoCube() {
  return (
    <div className="logo-cube">
      <div className="cube-face cube-front"></div>
      <div className="cube-face cube-back"></div>
      <div className="cube-face cube-left"></div>
      <div className="cube-face cube-right"></div>
      <div className="cube-face cube-top"></div>
      <div className="cube-face cube-bottom"></div>
    </div>
  );
}

export default LogoCube;
