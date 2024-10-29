import React, { useState } from 'react';
import './InlineNav.css';

const InlineNav = () => {
    const [activeLink, setActiveLink] = useState(''); // State to track active link

  // Links you want to display
  const links = [
    // { name: 'Home', href: '#home' },
    { name: 'Tiksave Video Downloader', href: '/' },
    { name: 'Photo Downloader', href: '/tiktok-slides-downloader' },
    { name: 'Mp3 Downloader', href: '/tiktok-mp3-downloader' },
  ];

  // Function to handle click event
  const handleLinkClick = (name) => {
    setActiveLink(name); // Set the clicked link as active
  };
  return (
    <div>
      <nav className="link-group nav justify-content-center">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={` link-underline-warning link ${activeLink === link.name ? 'active' : ''}`}
            onClick={() => handleLinkClick(link.name)}
          >
            {link.name}
            <span className='fa fa-link'></span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default InlineNav
