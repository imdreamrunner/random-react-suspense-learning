import { useState, Suspense, useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import Result2 from "./Result2";
import Result3 from "./Result3";
import { startTransition } from "react";

function App() {
  const [value, setValue] = useState(1);

  return (
    <div className="App">
      <Counter value={value} setValue={setValue} />

      <Result2Wrapper value={value} />
      <Result3Wrapper value={value} />
    </div>
  );
}

function Result2Wrapper({ value }) {
  const [localValue, setLocalValue] = useState(value);
  useEffect(() => {
    startTransition(() => setLocalValue(value));
  }, [value])
  return (
    <Suspense fallback="Loading....">
      <Result2 param={localValue} />
    </Suspense>
  );
}


function Result3Wrapper({ value }) {
  return (
    <Suspense fallback="Loading....">
      <Result3 param={value} />
    </Suspense>
  );
}

export default App;
