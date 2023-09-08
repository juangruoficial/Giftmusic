import { useNavigate } from "react-router-dom";
import { axiosMusic } from "../../config/axios.config";

const useRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    axiosMusic
      .post("/api/auth/register", data)
      .then(() => {
        alert("Account created successfully");
        navigate("/auth/login");
      })
      .catch((err) => console.log(err));
  };
  return {
    handleSubmit,
  };
};
export default useRegister;
