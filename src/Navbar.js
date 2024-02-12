import {Link} from "react-router-dom";

// see the App.js file for bellow

// if you want react to handle the routing only in the browsing
// and to intercept those requests for new pages
// this is to prevent the request to the server -- think about
// what "single page applications" means
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;