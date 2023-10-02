import { Link } from "react-router-dom";
import './MainNav.css'

const brandImage= "https://i.pinimg.com/474x/ff/30/22/ff302233b66f55ead813cb74435e2393.jpg "




export default function MainNav(props) {
    return (<nav className="MainNav">
      <Link to="/"> 
      <img src={brandImage}/>  
      </Link>
    <div>Dog Adoption</div>
    </nav>)
  }
  