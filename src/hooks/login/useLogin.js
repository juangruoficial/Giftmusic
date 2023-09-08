import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../store/userInfo";
import { axiosMusic } from "../../config/axios.config";

const useLogin = () => {
  const setUser = useUserInfo((state) => state.setUser);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    axiosMusic
      .post("/api/auth/login", data)
      .then(({ data }) => {
        setUser(data);
        navigate("/");
      }) //tengo que hgacer loader para peticiones tambien organizar peticiones en servicios
      .catch((err) => console.log(err));
  };
  return {
    handleSubmit,
  };
};
export default useLogin;
