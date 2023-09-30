import { Link } from "react-router-dom";

const LoginForm = ({ handleOnCLick }) => {
  return (
    <form onSubmit={handleOnCLick}>
      <InputLogin
        title="Login ID"
        type="username"
        name="username"
        placeholder="Login ID"
      />
      <InputLogin
        title="Kata sandi"
        type="password"
        name="password"
        placeholder="password"
      />

      <div className="pt-[10px] text-[12px] font-[400] text-[#0575B3] text-right">
        <Link>Lupa kata sandi ?</Link>
      </div>
      <div>
        <button
          className="w-[365px] h-[35px] bg-[#E60278] text-[#fff] rounded-[5px] p-[8px] text-[15px] mt-[30px] font-[600] border-none outline-none cursor-pointer leading-[18.29px]"
          type="submit"
        >
          Masuk
        </button>
      </div>
    </form>
  );
};

const InputLogin = ({ title, type, placeholder, name }) => {
  return (
    <div className="w-[365px] h-[57px] top-[324px] left-[795px] mt-[10px]">
      <label
        htmlFor=""
        className="text-[12px] font-[300] text-[#666666] leading-[14.63px]"
      >
        {title}
      </label>
      <br />
      <input
        className="w-[365px] h-[35px] bg-[#EEEEEE] text-[14px] rounded-[5px] pl-[10px] font-[500] border-none outline-none leading-[17.07px]"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default LoginForm;
