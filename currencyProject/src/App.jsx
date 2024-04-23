import InputBox from "./components/InputBox"
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedValue, setConvertedValue] = useState(0)

  const options = useCurrencyInfo(from)

  const currency = Object.keys(options)

  const convert = () => {
    setConvertedValue(amount * options[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedValue)
    setConvertedValue(amount)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat backgroundimage">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountchange={(amount) => setAmount(amount)}
                currencyOptions={currency}
                currencyChange={from}
                onCurrencychange={(curr) => {
                  return (
                    setFrom(curr)
                  )
                }}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currencyOptions={currency}
                currencyChange={to}
                onCurrencychange={(curr) => {
                  return (
                    setTo(curr)
                  )
                }}
                amount={convertedValue}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App