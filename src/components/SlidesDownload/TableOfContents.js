// TableOfContents.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TableOfContent.css'

const TableOfContents = ({ basePath }) => {
  const [tocItems, setTocItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll('article h3')).map((el, index) => {
      const title = el.textContent;
      let id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');

      if (!id || document.getElementById(id)) {
        id = `section-${index}`;
      }
      el.id = id;

      return { title, id };
    });
    setTocItems(items);
  }, []);

  const handleNavigation = (id) => {
    navigate(`${basePath}/${id}`);
  };

  return (
    <nav role="navigation" className="table-of-contents">
      <h2>On this page:</h2>
      <ul>
        {tocItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleNavigation(item.id)}
              style={{ background: 'none', border: 'none', color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;