import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";
import logo from "./logo.png";

function RegisterPage() {
  const [values, setValues] = useState({
    userId: "",
    userpassword: "",
    nickname: "",
  });
  const navigate = useNavigate();
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userId: values.userId,
      userpassword: values.userpassword,
      nickname: values.nickname,
    };

    axios
      .post(
        "http://ec2-13-125-230-55.ap-northeast-2.compute.amazonaws.com:5000/user",
        data
      )
      .then((res) => {
        console.log(res.data);
        alert("회원가입이 완료되었습니다");
        navigate("/");
      });
  };

  return (
    <>
      <div className="RegisterPage">
        <div style={{ height: "220px" }}>
          <Link to="/">
            <img className="logoimg" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="RegisterLetter">회원가입</div>
        <hr style={{ width: "50%" }} />
        <form className="RegisterBox" onSubmit={handleSubmit}>
          <div className="BoxLetter">아이디</div>
          <input
            value={values.userId}
            name="userId"
            onChange={handleInputChange}
          />
          <div className="BoxLetter">닉네임</div>
          <input
            value={values.nickname}
            name="nickname"
            onChange={handleInputChange}
          />
          <div className="BoxLetter">비밀번호</div>
          <input
            type="password"
            value={values.userpassword}
            name="userpassword"
            onChange={handleInputChange}
          />
          <button className="LoginButton" style={{ margin: "50px auto" }}>
            회원가입하기
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
