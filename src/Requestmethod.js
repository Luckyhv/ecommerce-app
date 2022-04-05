import axios from "axios";
const BASE_URL = "http://localhost:7000/api/";
const Token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0YjlmNDMxNjk5Yzk3MmFmZmFlMTNhIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE2NDkxMjMyOTksImV4cCI6MTY0OTM4MjQ5OX0.0M0OT4S_WAFdPViqnF59Dfu24_i_cux7jxShITRfo0k";

// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `${Token}` },
});