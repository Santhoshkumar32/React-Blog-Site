import { useParams,useHistory } from "react-router-dom";
import logo from './spinning-loading.gif';
import useFetch from './useFetch';

const BlogDetails=()=>{
    const {id} =useParams();
    const [data,isLoading,isError]=useFetch("http://localhost:8000/blogs/"+id);
    const history=useHistory();
    const handleDelete=()=>{
        fetch("http://localhost:8000/blogs/"+id,{
            method:'DELETE',
        })
        .then(()=>{
            history.push('/');
        })
    }
    return ( <div className="blogDetails">
        {isError && <div>{isError}</div> }
        {isLoading && <img src={logo} alt="Loading..." className="center"/> }     
        {data && <article>
            <h2>{data.title}</h2>
            <p2>Author : {data.author}</p2>
            <div>{data.body}</div>
            <button onClick={handleDelete}>delete</button>
            </article>} 
        </div>
    );
}
export default BlogDetails;