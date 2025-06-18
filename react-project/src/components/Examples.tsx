import { useState } from "react";
import TabButton from "./TabButton.tsx";
import { EXAMPLES } from "./../data-examples.tsx";
import Section from "./Section.tsx";

type ExampleKey = keyof typeof EXAMPLES;

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState<ExampleKey>();

  function handleSelect(selectedTab: ExampleKey) {
    setSelectedTopic(selectedTab);
  }

  return (
    <Section title="examples">
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
    </Section>
  );
}
