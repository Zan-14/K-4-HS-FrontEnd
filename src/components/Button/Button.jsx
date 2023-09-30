const Button = ({ children }) => {
  return <div className="space-x-4">{children}</div>;
};

const Login = ({ navigate }) => {
  return (
    <button
      onClick={navigate}
      className="bg-blue-900 text-white font-semibold p-2 px-4 rounded-lg"
    >
      Masuk
    </button>
  );
};

const Register = ({ navigate }) => {
  return (
    <button
      onClick={navigate}
      className="bg-pink-600 text-white font-semibold p-2 px-4 rounded-lg"
    >
      Daftar
    </button>
  );
};
const Default = ({ navigate }) => {
  return (
    <button
      onClick={navigate}
      className="text-blue-900 border border-blue-900 font-semibold p-2 px-4 rounded-lg"
    >
      Untuk Kandidat
    </button>
  );
};

const logout = ({ navigate }) => {
  return (
    <button
      onClick={navigate}
      className="text-blue-900 border border-blue-900 font-semibold p-2 px-4 rounded-lg"
    >
      Logout
    </button>
  );
};

Button.login = Login;
Button.logout = logout;
Button.register = Register;
Button.Default = Default;

export default Button;
