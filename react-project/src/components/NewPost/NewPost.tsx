import styles from "./NewPost.module.css";
import { useState } from "react";
import type React from "react";

interface NewPostProps {
  onCancel: () => void;
  onAddPost: (postData: PostData) => void;
}
interface PostData {
  body: string;
  author: string;
}

function NewPost({ onCancel, onAddPost }: NewPostProps) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function changeNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredName(event.target.value);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const postData: PostData = {
      body: enteredBody,
      author: enteredName,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body"> Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
