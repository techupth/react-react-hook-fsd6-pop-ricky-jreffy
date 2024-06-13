import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { useNavigate } from "react-router-dom";

function EditPostForm() {
  const navigate = useNavigate();
  const params = useParams();
  const { getEditPost, submitEditPost } = useBlogPosts();
  const [editPost, setEditPost] = useState({
    id: "",
    title: "",
    content: "",
    likes: "",
  });
  useEffect(() => {
    getEditPost(params.id, setEditPost);
  }, []);
  return (
    <form
      className="post-form"
      onSubmit={(e) => {
        e.preventDefault();
        submitEditPost(params.id, editPost);
        navigate("/");
      }}
    >
      <h1>Edit Post Form</h1>
      <div className="input-container">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title here"
            onChange={(e) => {
              setEditPost({ ...editPost, title: e.target.value });
            }}
            value={editPost.title}
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
              setEditPost({ ...editPost, content: e.target.value });
            }}
            value={editPost.content}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditPostForm;
