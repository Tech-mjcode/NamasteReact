import { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="t">
      <div>
        <button
          onClick={() => {
            let c = count + 1;
            setCount(c);
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
