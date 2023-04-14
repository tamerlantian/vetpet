export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    //return { Authorization: "Bearer " + user.accessToken };
    // for Nodejs Express Backend
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
