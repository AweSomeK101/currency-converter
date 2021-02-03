import React, { useState, useContext, useEffect } from "react";
import Drop from "./Drop";
import { GlobalContext } from "../GlobalContext/Context";

let flag = true;

function InputForm() {
  const { state, setState } = useContext(GlobalContext);
  const [amount, setAmount] = useState(state.amount);
  const [rate, setRate] = useState(state.rate);
  const [currencyFrom, setCurrencyFrom] = useState(state.currencyFrom);
  const [currencyTo, setCurrencyTo] = useState(state.currencyTo);
  const[list, setList]= useState([])

  function submitForm(e) {
    e.preventDefault();

    if (flag) {
      fetch(
        `https://api.exchangeratesapi.io/latest?symbols=${currencyTo}&base=${currencyFrom}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRate(Object.values(data.rates)[0]);
          setState({
            ...state,
            amount,
            rate: Object.values(data.rates)[0],
            currencyFrom,
            currencyTo,
            flag: true,
            chart: true,
          });
        });
      flag = false;
    } else {
      setState({
        ...state,
        amount,
        flag: true,
      });
    }
  }

  useEffect(()=>{
    fetch("https://api.exchangeratesapi.io/latest")
    .then(res=> res.json())
    .then(data=>{
      setList(Object.keys(data.rates))
    })
  }, [])

  return (
    <form onSubmit={submitForm} id="form">
      <div className="currency-selector">
        <Drop
          currency={currencyFrom}
          list={list}
          upVal={(r) => {
            setCurrencyFrom(r);
            flag = true;
          }}
        />
        <Drop
          currency={currencyTo}
          list={list}
          upVal={(r) => {
            setCurrencyTo(r);
            flag = true;
          }}
        />
      </div>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Convert</button>
    </form>
  );
}

export default InputForm;
