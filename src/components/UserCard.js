import "./UserCard.css";
import profile from "../assets/df.png";
import { Link } from "react-router-dom";

function UserCard({ userinfo, userId }) {
  const { nickname, gameCount, winCount, drawCount, loseCount } = userinfo;
  let winRate = Number(winCount) / Number(gameCount) * 100;
  winRate = winRate.toFixed(1);
  const rate = winRate >= 50 ? 'good' : 'bad';
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
          {gameCount === 0 ?<div></div> : <div className={rate}>
            승률 {winRate}%
          </div>}
        </div>
        <Link to={`/Delete/${userId}`}>
        <div className="delete">회원 탈퇴</div>
        </Link>
      </div>
    </>
  );
}

export default UserCard;
