import styles from "./Post.module.css";

interface PostProps {
  author: string;
  body: string;
}

function Post(props: PostProps) {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.body}>{props.body}</p>
    </div>
  );
}

export default Post;
