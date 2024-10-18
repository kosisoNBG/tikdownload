const fs = require('fs');
const path = require('path');
const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');

// Add your app's routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/tiktok-slides-downloader', changefreq: 'daily', priority: 0.5 },
  { url: '/tiktok-mp3-downloader', changefreq: 'daily', priority: 0.5 },
  { url: '/image-splitter', changefreq: 'daily', priority: 0.5 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add more URLs according to your app's structure
];

// Set the hostname of your website
const hostname = 'https://yourdomain.com';  // Change this to your domain

// Create sitemap stream and write to file
const generateSitemap = () => {
  const sitemapStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

  sitemapStream.pipe(writeStream);

  // Write each route to the sitemap
  routes.forEach((route) => {
    sitemapStream.write(route);
  });

  // End the sitemap stream
  sitemapStream.end();

  // Listen for finish event to confirm sitemap creation
  writeStream.on('finish', () => {
    console.log('Sitemap created successfully!');
  });

  // Error handling
  writeStream.on('error', (err) => {
    console.error('Error generating sitemap:', err);
  });
};

// Run the function to generate the sitemap
generateSitemap();