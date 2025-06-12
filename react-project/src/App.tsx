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

type ExampleKey = keyof typeof EXAMPLES;

function App() {
  const [selectedTopic, setSelectedTopic] = useState<ExampleKey>();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function handleSelect(selectedTab: ExampleKey) {
    setSelectedTopic(selectedTab);
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
          {CORE_CONCEPTS.map((item) => (
            <LearnProps
              key={item.title}
              {...item}
            ></LearnProps>
          ))}
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
