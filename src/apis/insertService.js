import API from "./api";

export const insertService = async (tripSet) => {
  try {
    const postRequest = await API.post("/post/insert", tripSet, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 로그인 요청이 성공적으로 완료되면, 데이터 반환
    return postRequest.data;
  } catch (error) {
    // 에러 처리
    console.error("API 요청 중 에러 발생:", error);
    throw error;
  }
};
