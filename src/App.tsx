import React from "react";
import Counter from "./components/Counter";
// -----------------------------------------------
/**
 *
 *
 * @return {*}
 */
const App: React.FC = () => {
  // Props
  // Hooks
  // Render Props

  return (
    <div className="App">
      <Counter
        children={(count, setCount) => (
          <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        )}
      />
    </div>
  );
};

export default App;
