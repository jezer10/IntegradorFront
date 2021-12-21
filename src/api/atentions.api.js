import httpClient from "./httpClient";

const createAtention = async ({ atention }) => {
  const {
    firstname,
    lastname,
    age,
    phone,
    mail,
    location,
    atentionDescription,
    atentionPreference,
  } = atention;
  const response = await httpClient.post("/atentions", {
    firstname,
    lastname,
    age,
    phone,
    mail,
    location,
    atentionDescription,
    atentionPreference,
  });

  console.log(response);
  if (response.status == 200) {
    return response.data;
  }

  return false;
};
const getAtentions = async () => {
  
  const response = await httpClient.get("/atentions");
  if (response.status == 200) {
    return response.data;
  }

  return [];
};

const getAtentionById = async (idatention) => {
  const response = await httpClient.get(`/atentions/derivation/${idatention}`);
  if (response.status == 200) {
    return response.data;
  }
  return [];
};


const getPendientAtentions = async () => {
  const response = await httpClient.get("/atentions/pendient");
  if (response.status == 200) {
    return response.data;
  }
  return [];
};

const getDerivedAtentions = async () => {
  const response = await httpClient.get("/atentions/derivation");
  if (response.status == 200) {
    return response.data;
  }
  return [];
};

export default {
  createAtention,
  getPendientAtentions,
  getDerivedAtentions,
  getAtentions,
  getAtentionById
};
