import React, { ReactNode }  from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>

const Button = ({children}: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
