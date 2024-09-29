import React, { useState } from 'react';
// import axios from 'axios';
import './VideoDownload.css'

const VideoDownload = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/download-tiktok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();

      if (response.ok) {
        setData(result);
      } else {
        setError(result.error);
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

  const handleClear = () => {
    setUrl('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Enter TikTok video URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          {url === '' ? (
            <button onClick={handlePaste} className="btn btn-outline-info" type="button" id="button-addon2">
              Paste <i className='fa fa-clipboard'></i>
            </button>
          ) : (
            <button onClick={handleClear} className="btn btn-outline-info" type="button" id="button-addon2">
              Clear <i className='fa fa-x'></i>
            </button>
          )}
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-success" type="submit" disabled={loading}>
            Download <i className='fa fa-download'></i>
          </button>
        </div>
      </form>

      {/* Loading Spinner */}
      {loading && <div className="spinner"></div>}

      {/* Show result if available */}
      {data && (
        <div className='col-md-6'>
          <div className="card text-center box-style ">
            <div className="card-header">
              <h3>Tiktok Video</h3>
            </div>
            <div className="card-body row">
              <div className='col-md-4'>
                <img src={data.image} alt="User_Avatar" style={{width:'150px'}} />
                <h5 className="card-title">{data.username}</h5>
                <p className="card-text">{data.full_name}</p>
              </div>
              <div className='col-md-6 download-con'>
                <span className='row '>
                  <a href={data.download_server[0]} className="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                  <a href={data.download_server[1]} className="btn btn-success mb-2" target="_blank" rel="noopener noreferrer">
                    Download Server 02
                  </a>
                  <a href="/" className="btn btn-secondary">Download Another video</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for error */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Error</h2>
            <p>{error}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDownload;
