import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./../../data.ts";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      {CORE_CONCEPTS.map((item) => (
        <CoreConcept key={item.title} {...item}></CoreConcept>
      ))}
    </section>
  );
}
