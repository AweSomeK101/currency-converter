import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../GlobalContext/Context";

function OutputCurrency() {
  const { state } = useContext(GlobalContext);
  const [convertedAmt, setConvertedAmt] = useState(state.amount * state.rate);

  // this useEffect fires twice idk why... help
  // btw why does it even fire after the first time?
  useEffect(() => {
    if (state.flag) {
      setConvertedAmt((state.amount * state.rate).toFixed(2));
    }
  });

  return (
    <section id="output-container">
      <OutUnit currency={state.currencyFrom} amount={state.amount} />
      <OutUnit currency={state.currencyTo} amount={convertedAmt} />
    </section>
  );
}

function OutUnit({ currency, amount }) {
  return (
    <div >
      <h4>{currency}</h4>
      <h2>{amount}</h2>
    </div>
  );
}

export default OutputCurrency;
