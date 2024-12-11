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
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const regex = /^[A-Za-z0-9]*$/;
    if (regex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.userId === ''|| values.nickname === ''|| values.userpassword === '')
    {
      return alert("빈 칸을 채워주세요.")
    }
    const data = {
      userId: values.userId,
      userpassword: values.userpassword,
      nickname: values.nickname,
    };
    //const url = "http://ec2-13-125-230-55.ap-northeast-2.compute.amazonaws.com:5000/user";
    const url = `http://localhost:5000/user`;
    axios
      .post(
        url,
        data
      )
      .then((res) => {
        console.log(res.data);
        alert("회원가입이 완료되었습니다");
        navigate("/");
      });
  };
  const struct = isValid ? "LoginButton" : "RegisterButton";
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
          {!isValid && <div className="BoxLetter" style={{marginTop:"1px", color: 'red' }}>영어와 숫자만 입력 가능합니다.</div>}
          <div className="BoxLetter">닉네임</div>
          <input
            value={values.nickname}
            name="nickname"
            onChange={handleInputChange}
            autoComplete="off"
          />
          <div className="BoxLetter">비밀번호</div>
          <input
            type="password"
            value={values.userpassword}
            name="userpassword"
            onChange={handleInputChange}
          />
          <button className={struct} style={{ margin: "50px auto" }} 
            disabled={!isValid}>
            회원가입하기
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
