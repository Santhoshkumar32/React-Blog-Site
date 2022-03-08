import BlogList from './BlogList';
import logo from './spinning-loading.gif';
import useFetch from './useFetch';

const Home=()=>{   
    const[data,isLoading,isError]=useFetch('http://localhost:8000/blogs');
    return(
        <div className="home">
            {isError && <div>{isError}</div> }
            {isLoading && <img src={logo} alt="Loading..." className="center"/> }        
            {data && <BlogList data={data} title={"All Blogs.."} />}
        </div>
    );
}
export default Home;