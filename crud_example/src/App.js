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
      
    </div>
  );
}