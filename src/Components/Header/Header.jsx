import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1 >E-ReactShop</h1>
            <div className="links">
                <Link to='/' >Home</Link>
                <Link to='/product' >Product</Link>
                <Link to='/about' >About</Link>
            </div>
            <div>
                <Cart />
            </div>
        </div>
    );
}

export default Header;
