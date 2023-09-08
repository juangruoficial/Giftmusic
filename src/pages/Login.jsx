import ConatainerAuth from "../components/layout/ConatainerAuth";

import FormLogin from "../components/login/FormLogin";

const Login = () => {
  return (
    <ConatainerAuth>
      <header className="hidden sm:block sm:max-w-[350px] rounded-xl overflow-hidden ">
        <img
          className="rounded-sm"
          src="/images/loginheader.png"
          alt="registerimage"
        />
      </header>
      <FormLogin />
    </ConatainerAuth>
  );
};
export default Login;
