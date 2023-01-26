import './Header.css'
import { Link } from 'react-router-dom'
function Header(){
    return(
            <header>
                <div>
                    <h1> 
                       <Link to="/">Portpolio</Link> 
                    </h1>

                    <nav>
                        <ul>
                            <li><Link to="/About" >about</Link></li>
                            <li><Link to="/Work" >work</Link></li>
                            <li><Link to="/Map" >map</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
    )
}




export default Header;