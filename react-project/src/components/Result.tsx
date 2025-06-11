import thumbUpImg from "./../assets/icons/Thumb_up.svg";
import thumbDownImg from "./../assets/icons/Thumb_down.svg";

function Result() {
  const randomResult = Math.random() < 0.5;

  const answText = randomResult ? "Good" : "Wrong";
  const answColor = randomResult ? "green" : "red";

  return (
    <>
      <img
        src={randomResult ? thumbUpImg : thumbDownImg}
        alt="Good answer icon"
      ></img>
      <span style={{ color: answColor }}> {answText} answer</span>
    </>
  );
}

export default Result;
