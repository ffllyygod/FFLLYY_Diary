import { useState } from "react";

/* eslint-disable react/prop-types */
const SmallBlock = ({ title, date }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <div>{title}</div>
      <div>
        <input
          type="checkbox"
          //   name=""
          //   id=""
          value={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <div>{date}</div>
      </div>
    </div>
  );
};
export default SmallBlock;
