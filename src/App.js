import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import OutputCurrency from "./components/OutputCurrency";
import Chart from "./components/Chart";
import { GlobalProvider } from "./GlobalContext/Context";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <InputForm />
        <OutputCurrency />
        <Chart />
      </div>
    </GlobalProvider>
  );
}

export default App;
