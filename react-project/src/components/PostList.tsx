import Post from "./Post.tsx";
import styles from "./PostList.module.css";

function PostList() {
  return (
    <ul className={styles.posts}>
      <Post author=" Zuzana" body="React is fine" />
      <Post author="Max" body=" He is lector" />
    </ul>
  );
}

export default PostList;
