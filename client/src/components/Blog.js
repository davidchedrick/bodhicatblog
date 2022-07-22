import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import Loading from "./Loading";

function Blog({ fetchRequest, setFetchRequest, currentUser }) {
    console.log('currentUser: ', currentUser.id);
    const [{ blog, error, status }, setState] = useState({
        article: null,
        error: null,
        status: "pending",
    });
   
    
    const [isEditing, setIsEditing] = useState(false);
    const [isPoster, setIsPoster] = useState(false);
    const { id } = useParams();
    

    useEffect(() => {
        
        fetch(`/api/posts/${id}`).then(r => {
            if (r.ok) {
                r.json().then(blog => {
                    console.log('blog: ', blog.user_id);
                    setState({ blog, error: null, status: "resolved" });
                    if (currentUser.id === blog.user_id) setIsPoster(true)
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
    }, [id, currentUser.id]);

    if (status === "pending") return <Loading />;
    // if (currentUser.id === blog.user_id) {setIsPoster(true)}
    return (
        <>
        {isPoster ? (
            <Button
                variant="dark"
                size="sm"
                className="m-2 position-absolute top-0 start-0"
                onClick={() => setIsEditing(isEditing => !isEditing)}
            >
                ...
            </Button>
        ) : null}
            

            <Button
                variant="dark"
                size="sm"
                className="m-2 position-absolute top-0 end-0"
                href={"/"}
            >
                X
            </Button>

            
            {isEditing ? (
                <div className="m-3 pt-5 d-grid gap-2">
                    <EditPost 
                    setFetchRequest={setFetchRequest}
                    fetchRequest={fetchRequest}
                    />
                    <DeletePost 
                       setFetchRequest={setFetchRequest}
                       fetchRequest={fetchRequest} 
                    />
                </div>
            ) : null}

            <article className="blog m-4">
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