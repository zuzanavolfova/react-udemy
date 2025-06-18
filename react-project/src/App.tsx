import { useState } from "react";
import PostList from "./components/PostList/PostList.tsx";
import MainHeader from "./components/Header/MainHeader.tsx";
import Examples from "./components/Examples.tsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.tsx";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <section style={{ borderBottom: "1px solid #ccc" }}>
          <PostList
            isPosting={modalIsVisible}
            onStopPosting={hideModalHandler}
          />
        </section>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
