import "./UserCard.css";
import profile from "./df.png";
import DonutChart from "react-donut-chart";

function UserCard({ userinfo }) {
  const { nickname, gameCount, winCount, drawCount, loseCount } = userinfo;
  console.log(userinfo);
  return (
    <>
      <div className="usercard">
        <div className="profile">
          <img src={profile} alt="프로필" />
        </div>
        <div className="userinfo">
          <h1 className="nickname">{nickname}</h1>
          <div className="gamecount">총 게임 수 : {gameCount}</div>
          <div className="winlose">
            <div>{winCount}승</div>
            <div style={{ marginLeft: "5px" }}>{drawCount}무</div>
            <div style={{ marginLeft: "5px" }}>{loseCount}패</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
