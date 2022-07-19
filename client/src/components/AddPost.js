import { useState } from "react"


function AddPost() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        createPost({title, content})
      }

    function createPost(formData) {
        return fetch("/api/posts", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(formData)
        })
          .then(res => {
            if (res.ok) {
              return res.json()
            } else {
              return res.json().then(errors => Promise.reject(errors))
            }
          })
          .then(post => {
            console.log(post)
          })
      }


    return(
        <div>
    
        <h3>Add BLog</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
          <label htmlFor="name"> Content </label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
          />
          {" "}<button type="submit">Add Group</button>
        </form>
      </div>
    );
}

export default AddPost