import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ReactMarkdown from "react-markdown";

const initialState = {
  article: null,
  error: null,
  status: "pending",
};


function Blog() {


    // const [{ article, error, status }, setState] = useState(initialState);
    const { id } = useParams();
    console.log('id: ', id);
  
    // useEffect(() => {
    //   setState(initialState);
    //   fetch(`/posts/${id}`).then((r) => {
    //     if (r.ok) {
    //       r.json().then((article) => {
    //         console.log('article: ', article);
    //         setState({ article, error: null, status: "resolved" })
            
    //       }
    //       );
    //     } else {
    //       r.json().then((message) =>
    //         setState({ article: null, error: message.error, status: "rejected" })
    //       );
    //     }
    //   });
    // }, [id]);

    // const { title, author, date, content, minutes_to_read } = article;

    return(
        <article>
            <h1>cat</h1>
        {/* <h1>{title}</h1>
        <small>
          <p>
            {date} •  {minutes_to_read} min read
          </p>
          <p>
            <em>Written by {author}</em>
          </p>
        </small>
        <article>{content}</article> */}
      </article>
    )
}

export default Blog