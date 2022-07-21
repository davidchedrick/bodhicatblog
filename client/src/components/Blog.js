import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
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
        fetch(`/api/posts/${id}`).then(r => {
            if (r.ok) {
                r.json().then(blog => {
                    
                    setState({ blog, error: null, status: "resolved" });
                });
            } else {
                r.json().then(message =>
                    setState({
                        blog: null,
                        error: message.error,
                        status: "rejected",
                    })
                );
            }
        });
    }, [id]);

    if (status === "pending") return <Loading />;

    return (
        <>
            <Button
                variant="dark"
                size="sm"
                className="m-2 position-absolute top-0 end-0"
                href={"/"}
            >
                X
            </Button>
            
            <div className="m-3 pt-5 d-grid gap-2">
            <EditPost />
            <DeletePost />
            </div>

            <article className="blog">
                <h1 className="b-title">{blog.title}</h1>
                <small>
                    <p>{blog.date}</p>
                    <p>
                        <em>Written by {blog.author}</em>
                    </p>
                </small>
                <hr className="b-line" />
                <div>{blog.content}</div>
            </article>
        </>
    );
}

export default Blog;
