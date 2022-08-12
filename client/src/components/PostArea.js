import Blogs from "./Blogs";
import Header from "./Header";

function PostArea({ currentUser, posts, handleLogout }) {
    return (
        <>
            <Header currentUser={currentUser} handleLogout={handleLogout} />

            {posts.length === 0 ? (
                <h1 className="position-absolute top-50 start-50 translate-middle">
                    Add First Post!
                </h1>
            ) : (
                <div>
                    {posts.map(post => (
                        <Blogs key={post.id} post={post} />
                    ))}
                </div>
            )}
        </>
    );
}

export default PostArea;
