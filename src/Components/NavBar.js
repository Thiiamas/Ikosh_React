import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const NavBar = (user) => {
  const onClick = () => {
    console.log(user.user[0]);
  };
  const cleanStorage = () => {
    localStorage.clear();
    console.log("storage cleaned");
  };

  const logout = () => {};
  return (
    <div className="NavBar">
      <button onClick={onClick}> click</button>
      <button onClick={cleanStorage}> clean storage</button>
      <Nav>
        <NavLink to="/">
          <h1> Logo </h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/post">Post</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavMenu>
        {!user[0] && (
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        )}
        {user[0] && (
          <div className="flex justify-between">
            <div className="flex justify-center h-16 mr-8">
              <img
                src="https://i.imgur.com/WxNkK7J.jpg"
                className="rounded-full border-solid border-white border-2 "
              />
            </div>
            <button
              className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
                            focus:shadow-outline"
              type="button"
              onClick={logout}
            >
              {" "}
              Logout{" "}
            </button>
          </div>
        )}
      </Nav>
    </div>
  );
};

export default NavBar;
