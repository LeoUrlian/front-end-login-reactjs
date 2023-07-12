import { api } from "../service/api";

export function setUserLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(server, username, password) {
  try {
    const request = await api.post("/login", {
      server: server,
      user: username,
      password: password,
    });

    return request.data.data;
  } catch (error) {
    return null;
  }
}
