import { Button, Card } from "react-bootstrap"


function UserPosts({ profile, currentUser }) {
    
    const postArea = profile.user_posts.map(post => (
        <Card  key={post.id} className="text-center m-3">
            <Card.Header className="">
                Written By: 
                <a href={`/profiles/${profile.id}`} className="m-1 link-color">{currentUser.username}</a>
            </Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.short_content}</Card.Text>

                <Button 
                    variant="outline-danger"
                    href={`/posts/${post.id}`}
                >
                    Read
                </Button>

            </Card.Body>
            <Card.Footer className="text-muted">{post.date}</Card.Footer>
        </Card>
    ))

    return(
        <>
            {postArea}
        </>
    )
}

export default UserPosts