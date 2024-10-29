import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './InlineNav.css';

const InlineNav = () => {
    const [activeLink, setActiveLink] = useState(''); // State to track active link

  // Links you want to display
  const links = [
    // { name: 'Home', to: '#home' },
    { name: 'Tiksave Video Downloader', to: '/' },
    { name: 'Photo Downloader', to: '/tiktok-slides-downloader' },
    { name: 'Mp3 Downloader', to: '/tiktok-mp3-downloader' },
  ];

  // Function to handle click event
  const handleLinkClick = (name) => {
    setActiveLink(name); // Set the clicked link as active
  };
  return (
    <div>
      <nav className="link-group nav justify-content-center">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className={` link-underline-warning link ${activeLink === link.name ? 'active' : ''}`}
            onClick={() => handleLinkClick(link.name)}
          >
            {link.name}
            <span className='fa fa-link'></span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default InlineNav
