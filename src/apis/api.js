import axios from "axios";

const API = axios.create({
  baseURL: "http://146.56.42.61:4000",
  headers: {
    "Content-Type": "application/json",
    // 필요하다면 Authorization 헤더 등 추가
  },
  withCredentials: true, // 모든 API 요청에 쿠키 보냄
});

export default API;
