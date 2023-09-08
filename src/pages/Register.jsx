import ConatainerAuth from "../components/layout/ConatainerAuth";
import FormRegister from "../components/register/FormRegister";

const Register = () => {
  return (
    <ConatainerAuth>
      <header className="hidden sm:block sm:max-w-[350px] rounded-xl overflow-hidden ">
        <img
          className="rounded-sm"
          src="/images/registerheader.png"
          alt="registerimage"
        />
      </header>
      <FormRegister />
    </ConatainerAuth>
  );
};
export default Register;
