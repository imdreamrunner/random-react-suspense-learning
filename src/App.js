import { useState, Suspense, useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import Result2 from "./Result2";
import Result3 from "./Result3";
import { startTransition } from "react";

function App() {
  const [value, setValue] = useState(1);

  const [notSuspenseValue, setNotSuspenseValue] = useState(value);
  useEffect(() => {
    startTransition(() => setNotSuspenseValue(value));
  }, [value]);

  return (
    <div className="App">
      <Counter value={value} setValue={setValue} />

      <Suspense fallback="Loading....">
        <Result2 param={notSuspenseValue} />
      </Suspense>

      <Suspense fallback="Loading....">
        <Result3 param={value} />
      </Suspense>
    </div>
  );
}

export default App;
