import React from "react";

const Title = ({ children, size }) => {
  return <h2 className={`font-bold text-${size ?? "2xl"}`}>{children}</h2>;
};

export default Title;
