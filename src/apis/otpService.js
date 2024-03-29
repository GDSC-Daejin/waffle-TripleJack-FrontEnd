import API from "./api";

export const otpService = async (studId, otp) => {
  const formData = new FormData();
  formData.append("nickname", studId);
  formData.append("otp", otp);

  try {
    const otpRequest = await API.post("/api/v1/verify-otp", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // 로그인 요청이 성공적으로 완료되면,

    // 필요한 데이터를 반환하거나 다음 작업을 수행합니다.
    return otpRequest.data;
  } catch (error) {
    // 에러 처리
    console.error("API 요청 중 에러 발생:", error);
    throw error;
  }
};
