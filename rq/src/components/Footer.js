import React from 'react';
import facebookIcon from '../facebook.svg';
import instagramIcon from '../instagram.svg';
import linkedinIcon from '../linkedin.svg';
import tweetIcon from '../tweet.svg';
import githubIcon from '../github.svg';

const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">

<div class="footer-left">
    <h3>Quote<span>Generator</span></h3>

    

    <p class="footer-company-name">Copyright © 2021 <strong>Rajaswathi</strong> All rights reserved</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Coimbatore</span>
            Tamilnadu</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 9342700884</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:sagar00001.co@gmail.com">rajaswathig@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About Us</span>
        <strong>RANDOM QUOTE GENERATOR-</strong>If you're looking for some motivational quotes or inspirational quotes to positively 
        influence your day, you've come to the right place. 
        This is exactly what the Random Quotes Generator is able to do.
    </p>
    <div class="footer-icons">
        {/* <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a> */}
        <a href="#" id="fb-quote">
            <span><img src={facebookIcon} alt="" /></span>
          </a>
          <a href="#" id="inst-quote">
            <span><img src={instagramIcon} alt="" /></span>
          </a>
          <a href="#" id="linked-quote">
            <span><img src={linkedinIcon} alt="" /></span>
          </a>
          <a href="#" id="twit-quote">
            <span><img src={tweetIcon} alt="" /></span>
          </a>
          <a href="#" id="git-quote">
            <span><img src={githubIcon} alt="" /></span>
          </a>
    </div>
</div>
</footer>
    </div>
  );
};
export default Footer;