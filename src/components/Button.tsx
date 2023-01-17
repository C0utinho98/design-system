import React from "react";
import {clsx} from 'clsx'


interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color: "primary" | "secondary";
  children: string;
}

export function Button({ children, color = "primary", ...rest }: IButton) {
  return (
    <button
      className={clsx('rounded-md text-text-base px-3 py-1', {
        'bg-primary50': color === "primary",
        'bg-secondary50': color === "secondary"
      })}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
