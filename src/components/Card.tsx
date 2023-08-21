import React from "react";

interface IProps {
  title: string;
  id: number;
}

const Card: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <h1> {props.title}</h1>
        <button>{props.id}</button>
    </div>
  );
};

export default Card;
