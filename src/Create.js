import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create=()=>{
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const[author,setAuthor]=useState("Myself");
  const [isLoading,setisLoading]=useState(false);
  const history=useHistory();

  const handleSubmit=(e)=>{
  e.preventDefault();
  const blog={title,body,author};

  setisLoading(true);
  fetch("http://localhost:8000/blogs",{
    method: 'POST',
    headers: {"Content-type":"application/json"},
    body: JSON.stringify(blog) 
  })
  .then(()=>{
  console.log("new blog added")
  setisLoading(false);}
   );

  history.push(-1);

  }
  return(
      <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title :</label>
        <input type="text" 
        required
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}} />

        <label>Blog Body :</label>
        <textarea required
        value={body}
        onChange={e=>setBody(e.target.value)}/>
        <label>Author :</label>
        <select value={author} onChange={e=>setAuthor(e.target.value)}>
          <option value="myself">Myself</option>
          <option value="someone">Sommeone</option>
        </select> 

        {!isLoading && <button>Add Blog</button>}
        { isLoading && <button disabled > Adding Blog </button>} 
        </form>
      </div>
    );
}

export default Create;