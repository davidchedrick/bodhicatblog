import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Editor({  blog  }) {
   
  

    const [title, setTitle] = useState(String(blog.title));
    console.log('title: ', title);
    const [content, setContent] = useState(String(blog.content));


    // add fetch PATCH

    return (
       
        <div className="m-2">
            <h3 className=" d-flex justify-content-center">Edit Your Blog</h3>
            <Form onSubmit={() => {}}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        placeholder="Title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        name="title"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        placeholder="Write Blog Here...."
                        as="textarea"
                        type="text"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        name="content"
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>

                <a href={"/"} className="btn btn-dark m-1">
                    Cancel
                </a>
            </Form>
        </div>
    );
}

export default Editor;


