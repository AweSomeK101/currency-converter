import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext/Context";
import { Line } from "react-chartjs-2";
import Moment from "moment";

function Chart() {
  const { state, setState } = useContext(GlobalContext);
  const [labels, setLabels] = useState([]);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    if (state.chart) {
      var myHeaders = new Headers();
      myHeaders.append("apikey", process.env.REACT_APP_API_KEY);

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };

      fetch(`https://api.apilayer.com/exchangerates_data/timeseries?start_date=${Moment()
      .subtract(15, "days")
      .format("YYYY-MM-DD")}&symbols=${state.currencyTo}&base=${
      state.currencyFrom
    }&end_date=${Moment().format(
        "YYYY-MM-DD"
      )}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          setLabels(
            Object.keys(data.rates).sort(
              (a, b) =>
                new Moment(a).format("YYYYMMDD") -
                new Moment(b).format("YYYYMMDD")
            )
          );

          let arr = [];
          let tempR = Object.values(data.rates).map((i) => Object.values(i)[0].toFixed(2));
          for (let i = 0; i < Object.keys(data.rates).length; i++) {
            arr.push({ date: Object.keys(data.rates)[i], rate: tempR[i] });
          }
          arr.sort(
            (a, b) =>
              new Moment(a.date).format("YYYYMMDD") -
              new Moment(b.date).format("YYYYMMDD")
          );
          setRates(arr.map((e) => e.rate));
        })
        .catch(err => {
          console.error(err);
        })
      setState({
        ...state,
        chart: false,
      });
    }
  });

  return (
    <section id="chart">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: `${state.currencyFrom} vs ${state.currencyTo}`,
              data: rates,
              backgroundColor: ["rgba(0,0,0,0.0)"],
              borderColor: ["rgba(155,155,155,1"],
              pointBackgroundColor: "#f58a07",
              pointRadius: 5,
              lineTension: 0,
            },
          ],
        }}
        width={450}
        height={300}
        options={{
          maintainAspectRatio:false,
          scales: {
            xAxes: [
              {
                gridLines: {
                  show: false,
                  gridLineWidth: 0,
                  drawOnChartArea: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  show: false,
                  gridLineWidth: 0,
                  drawOnChartArea: false,
                },
              },
            ],
          },
        }}
      />
    </section>
  );
}

export default Chart;
