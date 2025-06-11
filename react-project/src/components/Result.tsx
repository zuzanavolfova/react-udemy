function Result() {
  function getRandomBoolean() {
    return Math.random() < 0.5;
  }

  const answText = getRandomBoolean() ? "Good" : "Wrong";
  const answColor = answText === "Good" ? "green" : "red";

  return (
    <>
      <span style={{ color: answColor }}> {answText} answer</span>
    </>
  );
}

export default Result;
