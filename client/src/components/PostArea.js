import Blogs from "./Blogs";
import Header from "./Header";
import Loading from "./Loading";

function PostArea({ currentUser, posts, handleLogout }) {
    console.log('currentUser: ', currentUser);
    console.log('posts: ', posts.length);
    return (
        <>
            <Header currentUser={currentUser} handleLogout={handleLogout} />
            
            {posts.length === 0 ? <Loading /> :
             <div>
                {posts.map(post => (
                    <Blogs key={post.id} post={post} />
                ))}
            </div>
            }
           
        </>
    );
}

export default PostArea;
