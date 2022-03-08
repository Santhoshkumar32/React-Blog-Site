import { Link } from "react-router-dom";

const BlogList=({data,title})=>{
  // const blogs=props.blogs;
    //const title=props.title;
    
    return(
        <div className="BlogList">
            &nbsp;
           <h2>{title}</h2> 
          {data.map((data) => (
                <div className="blogPreview" key={data.id}> 
                <Link to={`/blogs/${data.id}`}>
                 <h2>{data.title}</h2>
                 <p2>Author : {data.author}</p2>
                </Link>  
                </div>
            ))}   

        </div>
    );
}
export default BlogList;