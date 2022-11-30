import React, { FC } from "react";

interface CounterProps {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | null;
}

const Counter: FC<CounterProps> = ({ children }) => {
  const [count, setCount] = React.useState<number>(0);
  return <div>{children(count, setCount)}</div>;
};

export default Counter;
