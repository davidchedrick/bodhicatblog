import { Button, Card } from "react-bootstrap"


function UserPosts({ profile, currentUser }) {
    console.log('currentUser: ', currentUser);
    console.log('profile: ', profile.user_posts);
    const postArea = profile.user_posts.map(post => (
<Card className="text-center m-3">
            <Card.Header className="">
                Written By:
                <a href={`/profiles/${post.id}`} className="m-1 link-color">{post.author}</a>
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