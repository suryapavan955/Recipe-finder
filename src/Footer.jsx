

import "./footer.css";

function Footer() {
  return (
    <footer className="footersection">
      {/* Left: text */}
      <p className="footer-text">Made with ❤</p>

      {/* Right: social media icons */}
      <div className="socialmedia">
        <ul>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src="https://static.vecteezy.com/system/resources/previews/008/385/736/non_2x/instagram-social-media-icon-symbol-element-illustration-free-vector.jpg"
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/20/20673.png"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img
                src="https://images.seeklogo.com/logo-png/31/1/twitter-logo-png_seeklogo-318424.png"
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
