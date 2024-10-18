import React, { useState } from 'react';
import './Mp3Download.css';
import Articlemp3 from './Articlemp3';
import InlineNav from '../InlineNav/InlineNav';

const Mp3Download = () => {
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
      const response = await fetch('http://127.0.0.1:5000/api/download-tiktok-mp3', {
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
        setError(result.error || 'Failed to download the video.');
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

  return (
    <div>

    <div className="container bg-primary text-white" style={{ padding: '20px', borderRadius: '5px' }}>
        <h1 className="text-center">Tiktok Mp3 Downloader</h1>
        <h3 className="text-center">Download and Save TikTok Mp3 for Free.</h3>
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
          <div className="card text-center box-style" style={{ marginTop: '20px' }}>
            <div className="card-header">
              <h3>TikTok Video Results</h3>
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
                  <a href="/tiktok-mp3-downloader" className="btn btn-secondary">
                    Download Another Video
                  </a>
                </span>
              </div>
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
<Articlemp3 />
    </div>
  );
};

export default Mp3Download;
