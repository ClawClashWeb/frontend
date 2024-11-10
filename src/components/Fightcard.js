import "./FightCard.css";

function DateCalc(targetDate) {
  const today = new Date();
  const createdAt = new Date(targetDate);
  const diffTime = today - createdAt;
  const Days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (Days <= 0) {
    return "0일 전";
  } else {
    return `${Days}일 전`;
  }
}

function FightCardItems({ item }) {
  const { blueScore, myTeam, redScore, versus, win, createdAt, nickname } =
    item;
  const fightday = DateCalc(createdAt);
  let result, resultclass, fontcolor;
  if (win === "win") {
    result = "승리";
    resultclass = "win";
    fontcolor = "blue";
  } else if (win === "draw") {
    result = "무승부";
    resultclass = "draw";
    fontcolor = "black";
  } else {
    result = "패배";
    resultclass = "lose";
    fontcolor = "red";
  }
  return (
    <>
      <div className={`fightCard ${resultclass}`}>
        <div className="versusBox">
          <div>vs</div>
          <div className="versus">{versus}</div>
        </div>
        <div className={`result ${fontcolor}`}>{result}</div>
        <div className="score">
          {blueScore} : {redScore}
        </div>
        <div>{fightday}</div>
      </div>
    </>
  );
}

// 정렬 함수 작성
// card/memory 컴포넌트
function FightCard({ items }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <li key={item.id}>
          <FightCardItems item={item} />
        </li>
      ))}
    </ul>
  );
}

export default FightCard;
