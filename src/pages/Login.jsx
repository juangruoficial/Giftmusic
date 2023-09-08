import { Link, useNavigate } from "react-router-dom";
import ConatainerAuth from "../components/layout/ConatainerAuth";

import { axiosMusic } from "../config/axios.config";
import { useUserInfo } from "../store/userInfo";

const Login = () => {
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
  return (
    <ConatainerAuth>
      <header className="hidden sm:block sm:max-w-[350px] rounded-xl overflow-hidden ">
        <img
          className="rounded-sm"
          src="/images/loginheader.png"
          alt="registerimage"
        />
      </header>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 w-[min(100%,_350px)]
      sm:w-[300px]
      "
      >
        <h2 className="upperCase font-semibold text-4xl">Getting in</h2>
        <div className="grid gap-4">
          <label className="text-white/50" htmlFor="email">
            Email
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1"
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className="grid gap-4">
          <label className="text-white/50" htmlFor="password">
            Password
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1"
            type="password"
            id="password"
            name="password"
          />
        </div>

        <button className="bg-purple-light upperCase font-semibold max-w-max mx-auto px-6 py-1 rounded-full">
          Log in
        </button>
        <Link className="text-center  underline" to="/auth/register">
          Dont have an account?
        </Link>
      </form>
    </ConatainerAuth>
  );
};
export default Login;
