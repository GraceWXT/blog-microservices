import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <form>
        <div className="form-group" >
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <button className="btn btn-primary" >Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
