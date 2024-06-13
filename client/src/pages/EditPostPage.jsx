import EditPostForm from "../components/EditPostForm";
import { useNavigate } from "react-router-dom";

function EditPostPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Edit Post Page</h1>
      <EditPostForm />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default EditPostPage;
