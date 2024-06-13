import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePostForm() {
  const navigate = useNavigate();
  const [createPost, setCreatePost] = useState({ title: "", content: "" });

  return (
    <form
      className="post-form"
      onSubmit={async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/posts", {
          title: createPost.title,
          content: createPost.content,
        });
        navigate("/");
      }}
    >
      <h1>Create Post Form</h1>
      <div className="input-container">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title here"
            onChange={(e) => {
              setCreatePost({ ...createPost, title: e.target.value });
            }}
            value={createPost.title}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Content
          <textarea
            id="content"
            name="content"
            type="text"
            placeholder="Enter content here"
            onChange={(e) => {
              setCreatePost({ ...createPost, content: e.target.value });
            }}
            value={createPost.content}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreatePostForm;
