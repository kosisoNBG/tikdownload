import React from 'react'
import './Socials.css'

const Socials = () => {
  return (
    <div className="shareit">
       {/* facebook  */}
      <a className="facebook" href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL" target="blank" title="facebook"><i className="fa fa-facebook"></i></a>

       {/* twitter  */}
      <a className="twitter" href="https://twitter.com/intent/tweet?text=YOUR_TITLE&url=YOUR_URL" target="blank" title="twitter"><i className="fa fa-twitter"></i></a>

      {/* linkedin  */}
      <a className="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=YOUR_URL&title=YOUR_TITLE" target="blank" title="linkedin"><i className="fa fa-linkedin"></i></a>

       {/* reddit  */}
      <a className="reddit" href="https://www.reddit.com/submit?url=YOUR_URL&title=YOUR_TITLE" target="blank" title="reddit"><i className="fa fa-reddit"></i></a>

       {/* tumblr  */}
      <a className="tumblr" href="https://www.tumblr.com/share/link?url=YOUR_URL&name=YOUR_TITLE&description=YOUR_DESC" target="blank" title="tumblr"><i className="fa fa-tumblr"></i></a>

       {/* pinterest  */}
      <a className="pinterest" href="https://pinterest.com/pin/create/button/?url=YOUR_URL&media=IMAGE_URL&description=YOUR_TITLE" target="blank" title="pinterest"><i className="fa fa-pinterest-p"></i></a>
    </div>

  )
}

export default Socials
