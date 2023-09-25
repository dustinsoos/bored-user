import React from "react";
import { ReactNode } from "react";

const Button = (props: { children: ReactNode }) => {
  return <button>{props.children}</button>;
};

export default Button;
