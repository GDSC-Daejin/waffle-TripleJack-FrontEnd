import API from "./api";

export const loginService = async (studId, passWord) => {
  const formData = new FormData();
  formData.append("nickname", studId);
  formData.append("birth", passWord);

  try {
    const loginRequest = await API.post("/api/v1/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
