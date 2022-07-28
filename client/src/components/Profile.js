import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import Header from "./Header";
import Loading from "./Loading";
import UserPosts from "./UserPost";
import defaultPic from "../img/default-user-pic.png";

function Profile({ currentUser, handleLogout }) {
    console.log('currentUser: ', currentUser);
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(String(currentUser.profile.name));
    const [website, setWebsite] = useState(String(currentUser.profile.website));
    const [bio, setBio] = useState(String(currentUser.profile.bio));
    const [picture, setPicture] = useState(String(currentUser.profile.picture));
    const [fetchRequest, setFetchRequest] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        editPost({
            name,
            website,
        });
    };

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
    }, [id, currentUser, fetchRequest]);

    function editPost(formData) {
        return fetch(`/api/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formData),
        })
            .then(res => {
                if (res.ok) {
                    console.log('res: ', res);
                    
                   
                } else {
                    return res.json().then(errors => Promise.reject(errors));
                }
            })
            .then(post => {
                console.log("post: ", post);
                setFetchRequest(fetchRequest => !fetchRequest);
                history.goBack()
            });
    }

    if (status === "pending") return <Loading />;

    return (
        <>
            <Header currentUser={currentUser} handleLogout={handleLogout} />

            {isCurrentUser ? (
                <>
                    <Container className="d-flex flex-row mb-3 justify-content-between">
                        <div className="d-flex flex-column mb-3">
                            <h1>Name: {profile.name}</h1>
                            <h1>Website: {profile.website}</h1>
                            <h1>Bio: {profile.bio}</h1>
                        </div>
                        <div className="d-flex flex-column mb-3 ">
                            <span
                                className="align-self-end"
                                type="button"
                                onClick={() =>
                                    setIsEditing(isEditing => !isEditing)
                                }
                            >
                                ✏️
                            </span>

                            <img
                                src={profile.picture || defaultPic}
                                alt={`of ${profile.name}`}
                                className="avatar"
                            ></img>
                        </div>
                    </Container>
                    <UserPosts profile={profile} currentUser={currentUser} />
                </>
            ) : (
                <h1>profile view {profile.name}</h1>
            )}

            {isEditing ? (
                <>
                    <div className="screenText">

                    <div>
                    <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        placeholder="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        name="name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                        placeholder="Write Blog Here...."
                        type="text"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                        name="website"
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="picture">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control
                        placeholder="Write Blog Here...."
                        type="text"
                        value={picture}
                        onChange={e => setPicture(e.target.value)}
                        name="picture"
                    />
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="bio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                        placeholder="Write Blog Here...."
                        as="textarea"
                        type="text"
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                        name="bio"
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
                {" "}
                <Button 
                variant="dark" 
                onClick={() => setIsEditing(isEditing => !isEditing)}
                >
                    Cancel
                </Button>

            </Form>
                    </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default Profile;
