import React from 'react';
import "./Footer.css";


//Footer part 

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-col-left">
          <img src={'./logo-footer.png'} alt="AllyLab logo"/>
        </div>
        <div className="footer-col-right">
          <h2 className="alt-heading">Diversity is important to us</h2>
          <p>Our definition of women includes transgender and cisgender, all those who experience or have experienced oppression as women, including non-binary and gender non-conforming people and all those who identify as women.</p>
          <p>We acknowledge the traditional owners of the lands on which we live, work and learn and pay our respects to their elders past, present and emerging.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Powered by Heruko  |  Website by Tiramiseudo  |  Copyright 2022</p>
      </div>
    </div>
  );
}
export default Footer;
