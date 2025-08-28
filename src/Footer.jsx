import { Link } from "react-router-dom"
import './footer.css'

function Footer(){
  return(
    <div className='footersection'>
      <div className='footerbox1'>
        <h1>Ready to cook smarter?</h1>
        <p>Hit the button , pick a recipe, and get a dinner on the table--fast</p>

        <Link to="/recipe">
          <button>Browse recipes</button>
        </Link>
      </div>
      <div className='footerbox2'>
        <p>Made with ❤ and 🍎</p>
        <section className='socialmedia'>
          <ul>
            <li><img src="https://static.vecteezy.com/system/resources/previews/008/385/736/non_2x/instagram-social-media-icon-symbol-element-illustration-free-vector.jpg"></img></li>
            <li><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png"></img></li>
            <li><img  src="https://images.seeklogo.com/logo-png/31/1/twitter-logo-png_seeklogo-318424.png"></img></li>
          </ul>
        </section>
      </div>
    </div>
  )

}

export default Footer;