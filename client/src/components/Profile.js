import { useParams } from "react-router";
import Header from "./Header"


function Profile({ currentUser, posts }) {
    console.log('postsprofile: ', posts);
    console.log('currentUser: ', currentUser);
    const { id } = useParams();

    return(
        <>
        <Header currentUser={currentUser} />
        <h1>{posts.author}</h1>
        
        </>
    )
}

export default Profile