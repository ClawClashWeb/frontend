import "./FightCard.css";

const detailDate = (createdAt) => {
  const milliSeconds = new Date() - new Date(createdAt);
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};

function FightCardItems({ item }) {
  const { blueScore, myTeam, redScore, versus, win, createdAt, nickname } =
    item;
  const fightday = detailDate(createdAt);
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
        <div className="content">
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
      </div>
    </>
  );
}

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
