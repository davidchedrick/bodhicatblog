import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "./Header";
import Loading from "./Loading";
import UserPosts from "./UserPost";

function Profile({ currentUser, handleLogout }) {
   
    const [isCurrentUser, setIsCurrentUser] = useState(false);
 
    const { id } = useParams();

    const [{ profile, error, status }, setState] = useState({
        profile: null,
        error: null,
        status: "pending",
    });
    
    
    useEffect(() => {
        fetch(`/api/profiles/${id}`).then(r => {
            if (r.ok) {
                r.json().then(profile => {
                   

                    setState({ profile, error: null, status: "resolved" });
                    currentUser.profile.id === profile.id
                        ? setIsCurrentUser(true)
                        : setIsCurrentUser(false);

                    // if (currentUser.id === blog.user_id) setIsPoster(true);
                    
                });
            } else {
                r.json().then(
                    message => console.log("message: ", message)
                    // setState({
                    //     blog: null,
                    //     error: message.error,
                    //     status: "rejected",
                    // })
                );
            }
        });

        
    }, [id, currentUser]);

    if (status === "pending") return <Loading />;
  
    
    

    return (
        <>
            <Header currentUser={currentUser} handleLogout={handleLogout} />

            {isCurrentUser ? (
                <Container>
                    <img src={profile.picture} alt={`of ${profile.name}`}></img>
                    <h1>Name: {profile.name}</h1>
                    <h1>Website: {profile.website}</h1>
                    <h1>Bio: {profile.bio}</h1>

                    <UserPosts 
                        profile={profile}
                        currentUser={currentUser}
                    />
                </Container>
            ) : (
                <h1>profile view {profile.name}</h1>
            )}
        </>
    );
}

export default Profile;
