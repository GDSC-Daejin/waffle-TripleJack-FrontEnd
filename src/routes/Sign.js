import { useState } from "react";

function Sign() {
  const [signId, setsignId] = useState();
  const [signPw, setsignPw] = useState();
  const [userName, setuserName] = useState();

  return (
    <div className="contentWrap">
      <div>이름</div>
      <input
        type="text"
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      ></input>
      <div>아이디</div>
      <p style={{ fontSize: "10px" }}>본인 학번으로 작성</p>
      <input
        type="text"
        onChange={(e) => {
          setsignId(e.target.value);
        }}
      ></input>
      <div>비밀번호</div>
      <input
        type="password"
        onChange={(e) => {
          setsignPw(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={() => {
          const userSignInfo = {
            id: signId,
            password: signPw,
            name: userName,
          };
          console.log(userSignInfo);
        }}
      >
        가입하기
      </button>
    </div>
  );
}

export default Sign;
