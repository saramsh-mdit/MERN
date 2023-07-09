// import React, { useRef } from "react";

// const App = () => {
//   //   const [state, setState] = React.useState();
//   const counterRef = useRef(0);
//   const headerRef = useRef();

//   const buttonHandler = () => {
//     // setState(!state);
//     console.log(counterRef);
//     counterRef.current = counterRef.current + 1;
//     if (counterRef.current % 2) {
//       headerRef.current.setAttribute("class", "header");
//     } else {
//       headerRef.current.setAttribute("class", "");
//     }
//     console.log(headerRef.current);
//   };

//   return (
//     <div>
//       <div>
//         {/* <p>{JSON.stringify(state)}</p> */}
//         <h2 ref={headerRef}>{counterRef.current}</h2>
//         <button onClick={buttonHandler}>Increse Counter</button>
//       </div>
//     </div>
//   );
// };

// export default App;
