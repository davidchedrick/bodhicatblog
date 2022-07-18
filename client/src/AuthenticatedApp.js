
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PostArea from './components/PostArea';

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const history = useHistory()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, [])
  
  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  }

  return (
    <PostArea 
      currentUser = {currentUser} 
      posts = {posts}
      handleLogout = {handleLogout}
    />
  );
}

export default AuthenticatedApp;