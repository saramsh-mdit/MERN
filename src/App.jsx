import React from "react";
// import RandomCompo from "./components/RandomCompo";
const RandomCompo = React.lazy(() => import("./components/RandomCompo"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading</div>}>
        <RandomCompo />
      </React.Suspense>
    </div>
  );
};

export default App;
