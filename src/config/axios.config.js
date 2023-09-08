import axios from "axios";

const axiosMusic = axios.create({
  baseURL: "https://playlist-share-dev.fl0.io",
});

axiosMusic.interceptors.request.use(
  (config) => {
    const token = `JWT ${
      JSON.parse(localStorage.getItem("userInfo"))?.state.user.token
    }`;
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Necesito hacer un interceptor para todas las respuestas cuando nos respondan con 401 se cierra la sesion

export { axiosMusic };
