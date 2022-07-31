import { Button, Card } from "react-bootstrap";

function userProfile({profile, currentUser}) {
console.log('userprofile: ', profile);
    console.log('usercurrentUser: ', currentUser);
            

    const postArea = profile.user_posts.map(post => (
        
        <Card  key={post.id} className="text-center m-3">
            {console.log("333", post)}
            <Card.Header className="">
                Written By: 
                <a href={`/profiles/${profile.id}`} className="m-1 link-color">{profile.name}</a>
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
    )).reverse()

    return(
        <>
            {postArea}
        </>
    )
   
}

export default userProfile;