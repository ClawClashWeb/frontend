import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
function LoginPage() {
  const [values, setValues] = useState({
    userId: "",
    userpassword: "",
  });

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
      .post(`http://localhost:5000/${values.userId}/verify`, {
        userpassword: values.userpassword,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <div className="logo">ClawClash</div>
      <form className="LoginBox" onSubmit={handleSubmit}>
        <div className="LoginLetter">로그인</div>
        <div className="LoginForm">
          <div>아이디</div>
          <input
            value={values.userId}
            name="userId"
            onChange={handleInputChange}
          />
          <div>비밀번호</div>
          <input
            value={values.userpassword}
            name="userpassword"
            onChange={handleInputChange}
          />
        </div>
        <button className="LoginButton">로그인</button>
        <Link to="/Register">
          <div>회원가입</div>
        </Link>
      </form>
    </>
  );
}

export default LoginPage;
