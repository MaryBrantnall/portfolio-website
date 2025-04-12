import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";


const AnimatedAvatar = ({ onClick }) => {
    const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 100); // Adjust timeout to match animation duration
  };


  return (
    <div onClick = {onClick} className="relative flex justify-center items-center">
        <div className="relative">
          <Avatar
            alt="Remy Sharp"
            src="src/assets/PP.jpg"
            onClick={handleClick}
            on
            sx={{
              width: 500,
              height: 500,
              margin: "auto",
              marginTop: 10,
              border: 5,
              borderColor: isAnimating ? "#FFF64F" : "#1B4432",
              cursor: "pointer",
              "&:hover": {
                borderColor: "#FFF64F",
                transform: isAnimating ? "scale(0.9)" : "scale(1.1)",
                transition: isAnimating ? "transform 0.1s ease-in-out" : "transform 0.3s ease-in-out",
              },
            }}
            className="group"
          />
    </div></div>
  );
};

export default AnimatedAvatar;
