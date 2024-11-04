import { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";

function RegisterPage() {
  const [values, setValues] = useState({
    userId: "",
    userpassword: "",
    nickname: "",
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
      nickname: values.nickname,
    };

    axios.post("http://localhost:5000/user", data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <div>
        <div className="RegisterLetter">ClawClash 회원가입</div>
        <form className="RegisterBox" onSubmit={handleSubmit}>
          <div>아이디</div>
          <input
            value={values.userId}
            name="userId"
            onChange={handleInputChange}
          />
          <div>닉네임</div>
          <input
            value={values.nickname}
            name="nickname"
            onChange={handleInputChange}
          />
          <div>비밀번호</div>
          <input
            value={values.userpassword}
            name="userpassword"
            onChange={handleInputChange}
          />
          <button>회원가입하기</button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
