import { useState, useEffect } from "react";
import userService from "../../services/user-service";

const ModeratorContent = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    userService.getModeratorBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        setContent(
          (error.response && error.response.data) ||
            error.message ||
            error.toString()
        );
      }
    );
  });

  return (
    <div className="">
      <h3>{content} </h3>
    </div>
  );
};

export default ModeratorContent;
