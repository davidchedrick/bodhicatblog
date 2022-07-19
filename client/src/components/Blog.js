import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
// import ReactMarkdown from "react-markdown";

const initialState = {
  article: null,
  error: null,
  status: "pending",
};


function Blog() {


    const [{ blog, error, status }, setState] = useState(initialState);
    const { id } = useParams();
  
    useEffect(() => {
      setState(initialState);
      fetch(`/api/posts/${id}`).then((r) => {
        if (r.ok) {
          r.json().then((blog) => {
            console.log('blog: ', blog);
            setState({ blog, error: null, status: "resolved" })
            
          }
          );
        } else {
          r.json().then((message) =>
            setState({ blog: null, error: message.error, status: "rejected" })
          );
        }
      });
    }, [id]);

    if (status === "pending") return <Loading />;

return(

   
        <article>
           
            <h1>cat</h1>
        <h1>{blog.title}</h1>
        <small>
          <p>
            {blog.date} 
          </p>
          <p>
            <em>Written by {blog.author}</em>
          </p>
        </small>
        <article>{blog.content}</article>
      </article>
    )
}

export default Blog