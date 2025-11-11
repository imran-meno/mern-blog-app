import { useState,useEffect } from "react";
import axios from 'axios'
function Article() {
  const [posts, setPosts] = useState([]);

  const display = async () => {
    try {
      const res = await axios
      .get("http://localhost:3000/display");
      console.log(res.data);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    display();
  }, []);

  return (

       <div>
     
     <div className="posts_container">
        {posts.length >0 ? (
          posts.map((post, index) => (
            <div className="posts" key={index}>

              <div className="post_image"> 
                {post.image && (
              <img
                src={`http://localhost:3000${post.image}`}
                alt={post.heading}
                style={{  width: "100px", borderRadius: "10px" }}
              />
            )}
              </div>
              <div className="post_data"> <h1>{post.tech}</h1>
              <h2>{post.heading}</h2>
              <p>{post.detail}</p></div>
             
            </div>
          ))
        ) : (
          <p>No posts yet.</p>
        )}
      </div>
       </div>
  );
}
export default Article;