import axios from "axios";
const baseURL = "http://localhost:8000";

const instance = axios.create({
  baseURL,
});

const token = localStorage.getItem("jwtToken");
if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export const addCash = async (data) => {
  try {
    const response = await instance.post("/cash", data);
    return response.data;
  } catch (error) {
    console.error("Error while calling addCash API:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export const addChequeOnline = async (data) => {
  try {
    const response = await instance.post("/online", data);
    return response.data;
  } catch (error) {
    console.error("Error while calling addChequeOnline API:", error);
    throw error;
  }
};

export const getCash = async () => {
  try {
    const response = await instance.get("/allCash");
    return response.data;
  } catch (error) {
    console.error("Error while calling getCash API:", error);
    throw error;
  }
};

export const getChequeOnline = async () => {
  try {
    const response = await instance.get("/allChequeOnline");
    return response.data;
  } catch (error) {
    console.error("Error while calling getChequeOnline API:", error);
    throw error;
  }
};

export const addPersonal = async (data) => {
  try {
    const response = await instance.post("/personal", data);
    return response.data;
  } catch (error) {
    console.error("Error while calling addPersonal API:", error);
    throw error;
  }
};

export const addFinnacial = async (data) => {
  try {
    const response = await instance.post("/finnacial", data);
    return response.data;
  } catch (error) {
    console.error("Error while calling addFinnacial API:", error);
    throw error;
  }
};

export const membership = async (data) => {
  try {
    const response = await instance.post("/membership", data);
    return response.data;
  } catch (error) {
    console.error("Error while calling membership API:", error);
    throw error;
  }
};

export const getmembershipNo = async () => {
  try {
    const response = await instance.get("/getmembershipnumber");
    return response.data;
  } catch (error) {
    console.error("Error while calling getmembershipNo API:", error);
    throw error;
  }
};

export const addpromotors = async (data) => {
  try {
    const response = await instance.post("/addpromotors", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with:", error.response.status);
      console.log(error);
      console.log(data);
    } else if (error.request) {
      console.error("Request was made but no response was received");
    } else {
      console.error("Error during request setup:", error.message);
    }
  }
};

export const account = async (data) => {
  try {
    const response = await instance.post("/account", data);
    return response.data;
  } catch (error) {
    console.error("Error while calling account API:", error);
    throw error;
  }
};

export const getaccount = async () => {
  try {
    const response = await instance.get("/getaccount");
    return response.data;
  } catch (error) {
    console.error("Error while calling getaccount API:", error);
    throw error;
  }
};
