import React from 'react';
import '../Assets/footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Sam's Portfolio</p>
      <p>Powered by Coffee ☕ and Code 💻</p>
      <div className="social-icons">
        <a href="https://github.com/mybaditssam" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/samuel-hernandez-649567130/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a href="https://twitter.com/mybaditssnotsam" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png"
            alt="Twitter"
            className="icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
