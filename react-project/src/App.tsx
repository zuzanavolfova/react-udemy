import "./App.css";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
    <main>
      <PostList />
    </main>
  );
}

export default App;
