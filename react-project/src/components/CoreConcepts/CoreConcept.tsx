interface CoreConceptProps {
  title: string;
  description: string;
}

export default function CoreConcept({ title, description }: CoreConceptProps) {
  return (
    <>
      <h2 style={{ color: "white" }}>{title}</h2>
      <p style={{ color: "white" }}>{description}</p>
    </>
  );
}
