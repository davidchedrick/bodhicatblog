import Blogs from "./Blogs";
import Header from "./Header";


function PostArea({ currentUser, posts, handleLogout }) {
    console.log('currentUser: ', currentUser);
    console.log('posts: ', posts.length);
    return (
        <>
            <Header currentUser={currentUser} handleLogout={handleLogout} />
            
            {posts.length === 0 ? <h1>Add First Post!</h1> :
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
