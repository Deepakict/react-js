import React, { Suspense, useState } from "react";

// import it like below
const LargeDataComponents = React.lazy(() => import("./LargeDataComponents"));

export default function OptimizeReactComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* Add Suspense and pass a component in fallback */}
      <Suspense fallback={<p>is loading....</p>}>
        <LargeDataComponents count={count} />
      </Suspense>
      <button onClick={increment}>
        <a>Increment</a>
      </button>
    </div>
  );
}
