import React from 'react'

const Faq = () => {
  return (
    <div className="container"style={{width: "90%", marginTop: "100px"}}>
      <h1>FAQs</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How To Download Video Tiktok No Watermark? 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Open Tik Tok app on your phone/or Web on your browser.
      Choose whatever video you want to download.
      Click to the Share button at the right bottom.
      Click the Copy Link button.
      Download by using your browsers: I want to keep things simple for you. No need to download or install any software. I make an application for this purpose as well but you can only install whenever you like.
      Go back to Tiksave.one and paste your download link to the field above then click to the Download button.
      Wait for our server to do its job and then, save the video to your device.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How To Get The Tiktok Video Download Link?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Open your TikTok application
      Choose the TikTok video that you want to download
      Click Share and at the Share options, find Copy Link button
      Your download URL is ready on the clipboard.
      For example, the link would look like this
      https://v.douyin.com/UFLNjnh/
      or
      https://www.tiktok.com/@philandmore/video/6805867805452324102
      or
      https://m.tiktok.com/v/6805867805452324102.html
      and more...
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Does TikSave.one Store Downloaded Videos or Keep aCopy of Videos?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      SnapTik.App doesn't store videos, neither do i keep copies of downloaded videos. All videos are hosted on TikTok's servers. Also, i don't keep track of the download histories of our users, thus making using SnapTik.App totally anonymous.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Do i Need To Install Instructions Or Extensions?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      No. I try to keep things easy for our users. All you need is your TikTok download video links. That's it.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Where Are Tiktok Videos Saved After Being Downloaded?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      When you're downloading files, they are usually saved into whatever folder you have set as your default. Your browser normally sets this folder for you. In browser settings, you can change and choose manually the destination folder for your downloaded TikTok videos.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Faq
