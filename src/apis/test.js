import API from "./api";

export const test = async () => {
  try {
    const response = await API.get("/api/v1/admin-members");
    return response.data;
  } catch {
    console.log("에러");
  }
};
