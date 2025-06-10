import NewPost from "./NewPost.tsx";
import Modal from "./Modal.tsx";
import styles from "./PostList.module.css";
import Post from "./Post.tsx";
import { useState, useEffect } from "react";

interface PostListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

interface PostData {
  body: string;
  author: string;
}

function PostList({ isPosting, onStopPosting }: PostListProps) {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true);
      const response = await fetch("http://local8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPost();
  }, []);

  function addPostsHandler(postData: PostData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostsHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post author={post.author} key={post.body} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>The are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>{" "}
        </div>
      )}
    </>
  );
}

export default PostList;
