import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import VideoDownload from './components/VideoDownload/VideoDownload';
import Faq from './components/Faq';
import Main from './components/Contents/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container bg-primary text-white" style={{ padding: '20px', borderRadius: '5px' }}>
        <h1 className="text-center">Tiktok Video Downloader</h1>
        <h3 className="text-center">Download and Save TikTok Videos Without Watermark.</h3>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <VideoDownload />
          </div>
        </div>
      </div>
      <Main />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
