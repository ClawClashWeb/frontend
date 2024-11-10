import { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.png";

function LoginPage() {
  const [values, setValues] = useState({
    userId: "",
    userpassword: "",
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
    };

    axios
      .post(
        `http://ec2-13-125-230-55.ap-northeast-2.compute.amazonaws.com:5000/${values.userId}/verify`,
        {
          userpassword: values.userpassword,
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          navigate("/Main", { state: values.userId });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="LoginPage">
        <div style={{ height: "220px" }}>
          <img className="logoimg" src={logo} alt="logo" />
        </div>
        <form className="LoginBox" onSubmit={handleSubmit}>
          <div className="LoginLetter">로그인</div>
          <div className="LoginForm">
            <input
              placeholder="clawclash 아이디"
              value={values.userId}
              name="userId"
              onChange={handleInputChange}
            />
            <div style={{ margin: "10px" }} />
            <input
              placeholder="비밀번호"
              type="password"
              value={values.userpassword}
              name="userpassword"
              onChange={handleInputChange}
            />
          </div>
          <button className="LoginButton">로그인</button>
          <Link to="/Register" style={{ textDecoration: "none" }}>
            <div style={{ color: "grey" }}>회원가입</div>
          </Link>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
