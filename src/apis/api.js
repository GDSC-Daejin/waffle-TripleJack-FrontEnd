import axios from "axios";

const API = axios.create({
  baseURL: "https://backend.gdscdju.dev",
  headers: {
    "Content-Type": "application/json",
    // 필요하다면 Authorization 헤더 등 추가
  },
  // withCredentials: true, // 모든 API 요청에 쿠키 보냄
});

export default API;
