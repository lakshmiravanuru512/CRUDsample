import axios from "axios";
import {React,useState,useEffect} from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
 const[post, setPost]=useState([]);

 useEffect(()=>{
  axios.get(baseURL).then((response)=>{
    setPost(response.data)
  })
 },[]);

 function createPost(){
  axios.post(baseURL,{
    title:"Hello World",
    body:"This is a new post call"
  }).then((response)=>{
    console.log(response.data);
    //const newdata=[...post,response.data];
   // setPost(newdata);
   //setPost([...post,response.data]);
   setPost((previousPosts=>[...previousPosts,response.data]))
  })
 }

  return (
    <div>
      <ul>
        {post.map(x=>
          <li>
            <h1>{x.title}</h1>
            <p>{x.body}</p>
            
          </li>
        )}
      </ul>
      <button onClick={createPost}>create post</button>
      
    </div>
  );
}