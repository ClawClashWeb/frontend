import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DeletePage.css";

function DeletePage(){
    const [userpassword, setUserpassword] = useState();
    const { userId } = useParams();
    console.log(userId)
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUserpassword(e.target.value);
      };
      const url = `http://localhost:5000/${userId}/verify`;
      const handleSubmit = (e) => {
        e.preventDefault();
        //const url = `http://ec2-13-125-230-55.ap-northeast-2.compute.amazonaws.com:5000/${values.userId}/verify`;
    
        axios
          .post(url, {
            userpassword: userpassword,
          })
          .then((res) => {
            if (res.data.success === true) {
              alert("회원 탈퇴가 완료되었습니다.")
              axios.delete(`http://localhost:5000/user/${userId}`)
              navigate("/")
            }
          })
          .catch((err) => {
            alert("비밀번호가 틀렸습니다");
          });
      };

    const closeModal = () => {
        navigate(-1);
    }

    return(
        <>
        <div className="modalBackground">
        <div
          className="modalContainer"
          style={{ width: "500px", height: "300px" }}
        >
          <div className="modalHead">
            <h3 style={{ marginBottom: "50px" }}>회원 탈퇴</h3>
            <button
              style={{
                border: "none",
                cursor: "pointer",
                backgroundColor: "transparent",
                marginBottom: "50px",
                fontSize: "30px",
                position: "absolute",
                right: "30px",
              }}
              onClick={closeModal}
            >
              x
            </button>
          </div>
          <form className="LoginBox" onSubmit={handleSubmit}>
            <input
              value={userpassword}
              onChange={handleChange}
              placeholder="비밀번호를 입력 해 주세요."
              type="password"
            />
            <button className="LoginButton" style={{ margin: "10px" }}>
              제출하기
            </button>
          </form>
        </div>
      </div>
    </>
    )
}

export default DeletePage;