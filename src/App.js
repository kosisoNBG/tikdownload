import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
// import Socials from './components/Socials/Socials';
import VideoDownload from './components/VideoDownload/VideoDownload';
import Faq from './components/Faq';
import Main from './components/Contents/Main';

function App() {
  
  return (
    <div className="App row">
      <Header />
      <header className="App-header jumbotron">
        <h1>Tiktok Video Downloader</h1>
        <h3>Download and Save TikTok Videos Without Watermark.</h3>
      <VideoDownload />
      </header>
      <Main />
      <Faq />
      {/* <Socials /> */}
      <Footer />
    </div>
  );
}

export default App;
