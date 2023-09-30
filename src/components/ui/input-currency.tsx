import { format } from "../../utils/currency";

interface InputCurrencyProps {
  onChange: (value: number) => void;
  value: number;
}

function InputCurrency(props: InputCurrencyProps) {
  return (
    <div className="relative">
      <span className="absolute z-10 top-2 left-3 font-normal">Rp</span>
      <input
        className="w-full block pl-9 h-10 rounded-md bg-white ring-1 ring-slate-300 px-4 font-thin outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
        placeholder="22.000.000"
        onChange={(e) => {
          const inputValue = e.target.value;
          const numericInput = inputValue.replace(/[^0-9]/g, "");
          e.target.value = format(Number(numericInput));
          props.onChange(Number(numericInput));
        }}
        value={format(props.value)}
      />
    </div>
  );
}

export default InputCurrency;
