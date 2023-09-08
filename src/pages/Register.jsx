import { Link } from "react-router-dom";
import ConatainerAuth from "../components/layout/ConatainerAuth";
import useRegister from "../hooks/register/useRegister";

const Register = () => {
  const { handleSubmit } = useRegister();
  return (
    <ConatainerAuth>
      <header className="hidden sm:block sm:max-w-[350px] rounded-xl overflow-hidden ">
        <img
          className="rounded-sm"
          src="/images/registerheader.png"
          alt="registerimage"
        />
      </header>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 w-[min(100%,_350px)]
      sm:w-[300px]
      "
      >
        <h2 className="upperCase font-semibold text-4xl">New Account</h2>
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
          <label className="text-white/50" htmlFor="username">
            Username
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1"
            type="text"
            id="name"
            name="name"
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
          Create Account
        </button>
        <Link className="text-center  underline" to="/auth/login">
          Already have an account?
        </Link>
      </form>
    </ConatainerAuth>
  );
};
export default Register;
