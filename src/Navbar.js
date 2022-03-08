import {Link} from 'react-router-dom';

const Navbar= () =>{
    return(
        <nav className="navbar">
            <h1>
                The Challengers Blog
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                 &nbsp;
                <Link to="/create">Add Blog</Link>
            </div>
        </nav>

    );
}

export default Navbar;