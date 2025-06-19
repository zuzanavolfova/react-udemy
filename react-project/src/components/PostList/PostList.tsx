import NewPost from "../NewPost/NewPost.tsx";
import Modal from "../Modal/Modal.tsx";
import styles from "./PostList.module.css";
import Post from "../Post/Post.tsx";
import { useState } from "react";
import { styled } from "styled-components";

const StyledPostList = styled.ul`
  list-style: none;
  max-width: 50rem;
  margin: 1rem auto;
  padding: 1rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
`;

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

  function addPostsHandler(postData: PostData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostsHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <StyledPostList className={styles.posts}>
          {posts.map((post) => (
            <Post author={post.author} key={post.body} body={post.body} />
          ))}
        </StyledPostList>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>The are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostList;
