import { Button, Card } from "react-bootstrap";


function Blogs({ post }) {

    return (
    <>

    <Card className="text-center m-3">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>
      {post.content}
      </Card.Text>
      <Button variant="primary">Read</Button>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>
</>
);
}

export default Blogs; 