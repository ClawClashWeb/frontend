import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import FightCard from "../components/Fightcard.js";
import UserCard from "../components/UserCard.js";
import "./MainPage.css";
import logo from "./logo.png";

function MainPage() {
  const location = useLocation();
  const userId = location.state;
  //const url = `http://ec2-13-125-230-55.ap-northeast-2.compute.amazonaws.com:5000/${userId}/gameRecord`;
  const url = `http://localhost:5000/${userId}/gameRecord`;
  const [values, setValues] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    const handleLoad = async () => {
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setUser(res.data.userinfo);
          setValues(res.data.records);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    handleLoad();
  }, [url]);

  return (
    <>
      <div className="MainPage">
        <div className="MainHeader">
          <Link to="/">
            <img className="HeaderImg" src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <UserCard userinfo={user} userId={userId} />
        </div>
        <hr style={{ width: "70%" }} />
        <div className="title"> 나의 전적</div>

        <div>
          {values.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              전적이 없습니다.
            </div>
          ) : (
            <FightCard items={values} />
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
