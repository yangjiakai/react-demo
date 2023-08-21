import React, { useState } from "react";
import Card from "./Card";
type Props = {
  title: string;
};

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];





const DemoA = () => {
  const [commonNum,setCommonNum] = useState(0)
  const handleClick = ()=>{
    if (commonNum<10) {
      setCommonNum(commonNum+1)
    }
  
  }

  return (
    <div>
      <h1>Demo A</h1>
      <p>
        This is a demo component. It is a functional component, which means it
        is just a function that returns some JSXs.
      </p>
      <button onClick={handleClick}>Add</button>

      <Card id={commonNum} title="Card1" />
      <Card id={commonNum} title="Card2" />
      <div></div>
    </div>
  );
};

export default DemoA;
