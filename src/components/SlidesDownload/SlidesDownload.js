import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './SlidesDownload.css';
import ArticleSlides from './ArticleSlides';
import InlineNav from '../InlineNav/InlineNav';

const SlidesDownload = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setData(null);  // Clear previous data on new submission

    try {
      const response = await fetch('http://127.0.0.1:5000/api/download-tiktok-slides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();

      if (response.ok) {
        setData(result);  // Set new data
      } else {
        setError(result.error || 'Failed to download the slides.');
        setShowModal(true);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setShowModal(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  const handleClear = () => setUrl('');

  // Function to download slides without opening a new tab
  const downloadSlide = (url, index) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', `slide_${index + 1}.jpg`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error downloading the image:', error));
  };

  return (
    
    <div>
    <Helmet>
      <title>Tiktok Slideshow Downloader | Download TikTok Slideshow hd no Watermarks</title>
    <meta name="description" content="Discover the best TikTok slideshow downloader tools to save stunning HD slideshows without watermarks. Learn how to download TikTok slideshows as videos and enhance your content." />
    <meta name="keywords" content="TikTok slideshow downloader, TikTok downloader slideshow, TikTok slideshow downloader HD, TikTok photo slideshow downloader HD, TikTok slideshow downloaded, TikTok slideshow download, TikTok slideshow to video downloader, TikTok slideshow downloader no watermark, TikTok slideshow downloader as video" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://yourwebsite.com/" />
    
     {/* Open Graph Meta Tags  */}
    <meta property="og:title" content="Tiktok Slideshow Downloader | Download TikTok Slideshow hd no Watermarks" />
    <meta property="og:description" content="Discover the best TikTok slideshow downloader tools to save stunning HD slideshows without watermarks. Learn how to download TikTok slideshows as videos and enhance your content." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
    <meta property="og:url" content="https://yourwebsite.com" />
    
     {/* Twitter Meta Tags  */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tiktok Slideshow Downloader | Download TikTok Slideshow hd no Watermarks" />
    <meta name="twitter:description" content="Discover the best TikTok slideshow downloader tools to save stunning HD slideshows without watermarks. Learn how to download TikTok slideshows as videos and enhance your content." />
    <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
    </Helmet>
    <div className="container bg-primary text-white" style={{ padding: '20px', borderRadius: '5px' }}>
      <h1 className="text-center">Tiktok Slides Downloader</h1>
      <h4 className="text-center">Download and Save TikTok Slides Without Watermark.</h4>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="container video-download-container" style={{ marginTop: '30px' }}>
            <InlineNav />
            <div className="col-md-6 mx-auto" style={{ marginBottom: '20px' }}>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter TikTok video URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                  />
                  {url === '' ? (
                    <button onClick={handlePaste} className="btn btn-success" type="button">
                      Paste <i className="fa fa-clipboard"></i>
                    </button>
                  ) : (
                    <button onClick={handleClear} className="btn btn-success" type="button">
                      Clear <i className="fa fa-times"></i>
                    </button>
                  )}
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-success" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Download'} <i className="fa fa-download"></i>
                  </button>
                </div>
              </form>

              {loading && <div className="spinner"></div>}

              {data && (
                <div className='col-md-6'>
                <div className="card text-center box-style" style={{ marginTop: '20px' }}>
                  <div className="card-header">
                    <h3>TikTok Slide Results</h3>
                  </div>
                  <div className="card-body row">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                      <img src={data.image} alt="User_Avatar" style={{ width: '150px' }} />
                      <h5 className="card-title">{data.username}</h5>
                      <div className="card-text overflow-auto" style={{ height: '100px', maxWidth: '200px', border: '1px solid #ddd', padding: '5px' }}>
                        {data.full_name}
                      </div>
                    </div>

                    <div className="col-md-6 download-con">
                      <span className="row">
                        {data.download_server1 && (
                          <a
                            href={data.download_server1}
                            className="btn btn-primary mb-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download
                          </a>
                        )}
                        {data.download_server2 && (
                          <a
                            href={data.download_server2}
                            className="btn btn-success mb-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download Server 02
                          </a>
                        )}
                        <a href="/" className="btn btn-secondary">
                          Download Another Video
                        </a>
                      </span>
                    </div>
                  </div>

                  {data.slides.length > 0 ? (
                    <div>
                      {data.slides.map((slide, index) => (
                        <div key={index} className="slide">
                          <img src={slide} alt={`Slide ${index + 1}`} style={{ width: '300px', height: 'auto' }} />
                          <button onClick={() => downloadSlide(slide, index)} className="btn btn-info mt-2">
                            Download Slide {index + 1}
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No slides found</p>
                  )}
                </div>
                </div>
              )}

              {showModal && (
                <div className="modal">
                  <div className="modal-content">
                    <h2>Error</h2>
                    <p>{error}</p>
                    <button className="close-btn" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <ArticleSlides />
    </div>
  );
};

export default SlidesDownload;
