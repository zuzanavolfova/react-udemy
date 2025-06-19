export default function Tabs({
  children,
  buttons,
  ButtonsContainer = "menu",
}: {
  children: React.ReactNode;
  buttons: React.ReactNode;
  ButtonsContainer?: React.ElementType | string;
}) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
