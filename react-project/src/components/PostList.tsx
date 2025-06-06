import NewPost from "./NewPost.tsx";
import Post from "./Post.tsx";
import Modal from "./Modal.tsx";
import styles from "./PostList.module.css";
import { useState } from "react";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function changeNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredName(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onNameChange={changeNameHandler}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={enteredName} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostList;
