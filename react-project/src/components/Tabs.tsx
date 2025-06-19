export default function Tabs({
  children,
  buttons,
  ButtonsContainer,
}: {
  children: React.ReactNode;
  buttons: React.ReactNode;
  ButtonsContainer: React.ElementType | string;
}) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
