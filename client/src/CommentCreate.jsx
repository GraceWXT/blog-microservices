import { useState } from "react";
import axios from "axios";

const CommentCreate = (props) => {
  const { postId } = props;

  const [content, setContent] = useState("");

  const submitComment = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {content});
    setContent("");
  };

  return (
    <div>
      <form onSubmit={submitComment}>
        <div className="form-group">
          <label>New Comment</label>
          <input
          className="form-control"
          value={content}
          onChange={event => setContent(event.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
};

export default CommentCreate;
