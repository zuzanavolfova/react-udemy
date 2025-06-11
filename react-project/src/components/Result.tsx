function Result() {
  const randomResult = Math.random() < 0.5;

  const answText = randomResult ? "Good" : "Wrong";
  const answColor = randomResult ? "green" : "red";

  return (
    <>
      <span style={{ color: answColor }}> {answText} answer</span>
    </>
  );
}

export default Result;
