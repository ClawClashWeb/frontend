import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import FightCard from "../components/Fightcard.js";
import "./MainPage.css";
function MainPage() {
  const location = useLocation();
  const userId = location.state;
  const url = `http://ec2-13-125-230-55.ap-northeast-2.compute.amazonaws.com:5000/${userId}/gameRecord`;
  const [values, setValues] = useState("");
  useEffect(() => {
    const handleLoad = async () => {
      axios
        .get(url)
        .then((res) => {
          setValues(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    handleLoad();
  }, [url]);

  return (
    <>
      <div className="title">gjtjdwl님의 전적</div>
      <div>
        {values.length === 0 ? (
          <div>전적이 없습니다.</div>
        ) : (
          <FightCard items={values} />
        )}
      </div>
    </>
  );
}

export default MainPage;
