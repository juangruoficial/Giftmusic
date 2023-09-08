import { Link } from "react-router-dom";
import useLogin from "../../hooks/login/useLogin";

const FormLogin = () => {
  const { handleSubmit } = useLogin();
  return (
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
  );
};
export default FormLogin;
