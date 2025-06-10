function Result() {
  function getRandomBoolean() {
    return Math.random() < 0.5;
  }

  const isGoodAnsw = getRandomBoolean();

  return (
    <>
      {!isGoodAnsw && <span style={{ color: "red" }}>Wrong answer</span>}
      {isGoodAnsw && <span style={{ color: "green" }}>Good answer</span>}
    </>
  );
}

export default Result;
