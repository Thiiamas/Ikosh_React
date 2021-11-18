import { LoginPasswordForm } from "../Widget/FormWidget";
import { useState } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";
const Fansites = ({ currentUser }) => {
  const [fanslyLogin, setFanslyLogin] = useState(null);
  const [fanslyPW, setFanslyPW] = useState(null);
  const [mymLogin, setMymLogin] = useState(null);
  const [mymPW, setMymPW] = useState(null);
  const [swameLogin, setSwameLogin] = useState(null);
  const [swamePW, setSwamePW] = useState(null);

  const updateFansites = () => {
    console.log(currentUser.username);
    return axios
      .post(
        "http://localhost:8080/api/user/fansites",
        {
          username: currentUser.username,
          fanslyLogin: fanslyLogin,
          fanslyPW: fanslyPW,
          mymLogin: mymLogin,
          mymPW: mymPW,
          swameLogin: swameLogin,
          swamePW: swamePW,
        },
        { headers: authHeader() }
      )
      .then((response) => console.log(response.data));
  };

  return (
    <div
      className="bg-indigo-200 flex flex-shrink content-center flex-col justify-around shadow-lg
        max-w-2xl mx-auto mt-10 h-4/5 border-solid rounded-lg border-4 border-indigo-200"
    >
      <LoginPasswordForm
        label="fansly"
        setLogin={setFanslyLogin}
        setPW={setFanslyPW}
      />
      <LoginPasswordForm
        label="Swame"
        setLogin={setSwameLogin}
        setPW={setSwamePW}
      />
      <LoginPasswordForm label="Mym" setLogin={setMymLogin} setPW={setMymPW} />
      <button className="" onClick={updateFansites}>
        Update
      </button>
    </div>
  );
};

export default Fansites;
