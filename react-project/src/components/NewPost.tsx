import styles from "./NewPost.module.css";
import type React from "react";

interface NewPostProps {
  onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewPost(props: NewPostProps) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body"> Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
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
