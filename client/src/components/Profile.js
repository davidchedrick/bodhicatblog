import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header"
import Loading from "./Loading";


function Profile({ currentUser, posts }) {
  
    console.log('currentUser: ', currentUser);
    const { id } = useParams();
    console.log('params id: ', id);
  
    const [{ profile, error, status }, setState] = useState({
        profile: null,
        error: null,
        status: "pending",
    });
  
    useEffect(() => {
        fetch(`/api/profiles/${id}`).then(r => {
            if (r.ok) {
                r.json().then(profile => {
                    console.log('profile: ', profile);
                    
                    setState({ profile, error: null, status: "resolved" });
                    // if (currentUser.id === blog.user_id) setIsPoster(true);
                });
            } else {
                r.json().then(message =>
                    console.log('message: ', message)
                    // setState({
                    //     blog: null,
                    //     error: message.error,
                    //     status: "rejected",
                    // })
                );
            }
        });
    }, [id]);

    if (status === "pending") return <Loading />;

    return(
        <>
        <Header currentUser={currentUser} />
        <h1>profile view {profile.name}</h1>

        <h1>current user {currentUser.username}</h1>
        </>
    )
}

export default Profile