import API from "./api";

export const loginService = async (studId, passWord) => {
  const loginUserInfo = {
    studID: studId,
    password: passWord,
  };

  try {
    const loginRequest = await API.post("/login", loginUserInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 로그인 요청이 성공적으로 완료되면, 데이터 반환
    return loginRequest.data;
  } catch (error) {
    // 에러 처리
    console.error("API 요청 중 에러 발생:", error);
    throw error;
  }
};
