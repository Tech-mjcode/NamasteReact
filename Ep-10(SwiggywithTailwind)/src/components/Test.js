import { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="t">
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Test;
