import { Link } from "react-router-dom";
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">TikSave.one is a free TikTok downloader that allow download video on TikTok in the best quality. Download TikTok videos on a web browser, support all PC, tablet, iPhone, Android devices.

            In addition, TikSave.one also allows download TikTok MP3 in high quality. Just paste the TikTok link into the input box on TikSave and you can download any video in .mp3, .mp4 format quickly.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Tools</h6>
            <ul className="footer-links">
              <li><Link to="/">Download Tiktok Videos</Link></li>
              <li><Link to="/tiktok-slides-downloader">Download Tiktok Slide</Link></li>
              <li><Link to="/tiktok-story-downloader">Download Tiktok Story</Link></li>
              {/* <li><Link to="http://scanfcode.com/category/java-programming-language/">Image Splitter</Link></li> */}
              <li><Link to="/">Download Tiktok Videos Free No Watermark</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="http://tiksave.one/about/">About Us</Link></li>
              <li><Link to="http://tiksave.one/contact/">Contact Us</Link></li>
              {/* <li><Link to="http://scanfcode.com/contribute-at-scanfcode/">Contribute</Link></li> */}
              <li><Link to="http://tiksave.one/privacy-policy/">Privacy Policy</Link></li>
              <li><Link to="http://tiksave.one/sitemap/">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
         <Link to="/">TikSave</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    // <div>
    // <div className="wrapper">
    //   <hr />
    // <footer className="page-footer">
    //   <span>This application is not associated by any means to TikTok or ByteDance.</span> <br />
    //   <span>Copyright 2024 © tikdownload.com Powered by tikdownload</span>
    //   </footer>
    // </div>
    // </div>
  )
}

export default Footer
