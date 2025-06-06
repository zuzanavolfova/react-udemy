import NewPost from "./NewPost.tsx";
import Modal from "./Modal.tsx";
import { useState } from "react";

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
    </>
  );
}

export default PostList;
