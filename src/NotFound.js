import {Link} from 'react-router-dom';
const NotFound=()=>{
    return(<div className="NotFound">
        <h2>Page not found!</h2>
        <Link to="/">Back to Homepage.</Link>
    </div>);

}
export default NotFound;