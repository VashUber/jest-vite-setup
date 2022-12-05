import { FC, HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};
