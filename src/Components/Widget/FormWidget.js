import { Form } from "react-bootstrap";

export const FormInput = ({ onInputChange, label, placeholder }) => {
  return (
    <div className="mb-4 ml-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        onChange={onInputChange}
      />
    </div>
  );
};

export const LoginPasswordForm = ({ setLogin, setPW, label }) => {
  const onInputLogin = (e) => {
    setLogin(e.target.value);
  };

  const onInputPW = (e) => {
    setPW(e.target.value);
  };
  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-2 ml-4">
        {label}
      </label>
      <div className="flex">
        <FormInput onInputChange={onInputLogin} label="Login" />
        <FormInput onInputChange={onInputPW} label="Password" />
      </div>
    </div>
  );
};
