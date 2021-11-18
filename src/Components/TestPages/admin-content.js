import { useState, useEffect } from "react";
import userService from "../../services/user-service";

const AdminContent = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    userService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setContent(error.response.data.message);
        } else {
          console.log(error);
        }
      }
    );
  });

  return (
    <div className="">
      <h3>{content} </h3>
    </div>
  );
};

export default AdminContent;
