import { Button, Card} from "react-bootstrap";

function Blogs({ post }) {
    console.log("post: ", post);

    return (
        <Card className="text-center m-3">
            <Card.Header className="">
                Written By:
                <a href="#login" className="m-1">{post.author}</a>
            </Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>

                <Button 
                    variant="primary"
                    href={`/posts/${post.id}`}
                >
                    Read
                </Button>

            </Card.Body>
            <Card.Footer className="text-muted">{post.date}</Card.Footer>
        </Card>
    );
}

export default Blogs;
