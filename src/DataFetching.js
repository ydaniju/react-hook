import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromSubmit, setIdFromSubmit] = useState(1);

  const handleClick = () => setIdFromSubmit(id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromSubmit}`)
      .then(res => {
        setPost(res.data);
        console.log(res);
      })
      .catch(e => console.log(e));
  }, [idFromSubmit]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <input type="submit" value="Submit" onClick={handleClick} />
      <ul>{post.title}</ul>
    </div>
  );
};
