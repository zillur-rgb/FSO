import React from "react";

const Notification = () => {
  const style: {
    border: string;
    padding: number;
    borderWidth: number;
  } = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <h1 style={style}>Notification</h1>;
};

export default Notification;
