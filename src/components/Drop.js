import React, { useState } from "react";

function Drop({ currency, upVal, list }) {
  const [code, setCode] = useState(currency);

  function handleChange(e) {
    setCode(e);
    upVal(e);
  }

  return (
    <div className="select">
      <select
        name={currency}
        id={currency}
        value={code}
        onChange={(e) => handleChange(e.target.value)}
      >
        {list.map((e, index) => {
          return (
            <option value={e} key={index}>
              {e}
            </option>
          );
        })}
      </select>
      <span className="focus"></span>
    </div>
  );
}

export default Drop;
