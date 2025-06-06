import NewPost from "./NewPost.tsx";
import Post from "./Post.tsx";
import Modal from "./Modal.tsx";
import styles from "./PostList.module.css";
import { useState } from "react";

function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function changeNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredName(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={changeBodyHandler}
          onNameChange={changeNameHandler}
        />
      </Modal>
      <ul className={styles.posts}>
        <Post author={enteredName} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostList;
