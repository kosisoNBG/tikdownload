import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import VideoDownload from './components/VideoDownload/VideoDownload';
import SlidesDownload from './components/SlidesDownload/SlidesDownload';
import Mp3Download from './components/Mp3Download/Mp3Download';
import Faq from './components/Faq';
// import Main from './components/Contents/Main';

function App() {
  return (
      <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<VideoDownload />} />
        <Route path="/tiktok-slides-downloader" element={<SlidesDownload />} />
        <Route path="/tiktok-mp3-downloader" element={<Mp3Download />} />
      </Routes>
      {/* <Main /> */}
      <Faq />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
