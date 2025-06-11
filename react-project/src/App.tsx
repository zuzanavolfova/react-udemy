import { useState } from "react";
import PostList from "./components/PostList/PostList.tsx";
import MainHeader from "./components/Header/MainHeader.tsx";
import { CORE_CONCEPTS } from "./data.ts";
import TabButton from "./components/TabButton.tsx";
import { EXAMPLES } from "./data-examples.tsx";

interface LearnProps {
  title: string;
  description: string;
}

function LearnProps({ title, description }: LearnProps) {
  return (
    <>
      <h2 style={{ color: "white" }}>{title}</h2>
      <p style={{ color: "white" }}>{description}</p>
    </>
  );
}

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
        <section>
          <h2>Props learning</h2>
          <LearnProps {...CORE_CONCEPTS[0]}></LearnProps>
          <LearnProps {...CORE_CONCEPTS[1]}></LearnProps>
          <LearnProps title="hi" description="pozdrav AJ"></LearnProps>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Component</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
