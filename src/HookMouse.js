import React from "react";

const HookMouse = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const logMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };

  React.useEffect(() => {
    console.log("I dey");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Mouse coordinate is x: {x} and y: {y}
    </div>
  );
};

export default HookMouse;
