import './middlecontent.css'
import { Link } from "react-router-dom"


function Middlecontent(){

    return(

        <div className='middlecontent'>
        <div className='content1'>
        <h1>Ready to cook smarter?</h1>
        <p>Hit the button , pick a recipe, and get a dinner on the table--fast</p>

        <Link to="/recipe">
          <button>Browse recipes</button>
        </Link>
      </div>
        </div>
    )
}

export default Middlecontent;