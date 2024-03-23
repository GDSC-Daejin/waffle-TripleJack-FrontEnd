import API from "./api";

export const loginService = async (studId, passWord) => {
  const formData = new FormData();
  formData.append("nickname", studId);
  formData.append("birth", passWord);

  try {
    // API 호출 시, 별도의 Content-Type 헤더 설정을 하지 않습니다.
    const response = await API.post("/api/v1/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
