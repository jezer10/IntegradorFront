import httpClient from "./httpClient";

const getPendientUsers = async () => {
  const response = await httpClient.get("/users/personal/pendient");
  if (response.status == 200) {
    return response.data;
  }
  return [];
};

const getUsersByGender = async (gender) => {
  const response = await httpClient.get(`/users/personal/gender/${gender}`);
  if (response.status == 200) {
    return response.data;
  }
  return [];
};

const registerUser = async (file, registerData) => {
  let formData = new FormData();
  formData.append("evidence", file);
  formData.append("data", JSON.stringify(registerData));

  const response = await httpClient.post("/users/personal", formData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status == 200) {
    return true;
  }
  return false;
};

const denegateUser = async (iduser) => {
  const response = await httpClient.delete(
    `/users/personal/pendient/${iduser}`
  );
  if (response.status == 200) {
    return true;
  }
  return false;
};

const activateUser = async (iduser) => {
  const response = await httpClient.put(`/users/personal/pendient/${iduser}`);
  if (response.status == 200) {
    return true;
  }
  return false;
};

export default {
  getPendientUsers,
  denegateUser,
  activateUser,
  registerUser,
  getUsersByGender
};
