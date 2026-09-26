import { useState } from "react";

export default function StateExample() {
  let [num1, setNum1] = useState(1);
  let [num2, setNum2] = useState(1);
  let [num3, setNum3] = useState(1);
  function decrement(num) {
    if (num === "num1") setNum1 = num1 - 1;
    else if (num === "num2") setNum2 = num2 - 1;
    else setNum3 = num3 - 1;
  }

  function increment(num) {
    if (num === "num1") setNum1 = num + 1;
    else if (num === "num2") setNum2 = num2 + 1;
    else setNum3 = num3 + 1;
  }
  return (
    <>
      <h1>State Example</h1>
      <h2>num1 = {num1}</h2>
      <button onClick={() => decrement("num1")}>Decrement</button>
      <button onClick={() => increment("num1")}>Increment</button>
      <hr />
      <h2>num2 = {num2}</h2>
      <button onClick={() => decrement("num2")}>Decrement</button>
      <button onClick={() => increment("num2")}>Increment</button>
      <hr />
      <h2>num3 = {num3}</h2>
      <button onClick={() => decrement("num3")}>Decrement</button>
      <button onClick={() => increment("num3")}>Increment</button>
    </>
  );
}

// import { useState } from "react";

// export default function StateExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);
//   let [num3, setNum3] = useState(1);
//   return (
//     <>
//       <h1>State Example</h1>
//   <h2>num1 = {num1}</h2>
//       <button onClick={() => setNum1(num1 - 1)}>Decrement</button>
//       <button onClick={() => setNum1(num1 + 1)}>Increment</button>
//       <hr />
//        <h2>num2 = {num2}</h2>
//       <button onClick={() => setNum2(num2 - 1)}>Decrement</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment</button>
//       <hr />
//        <h2>num3 = {num3}</h2>
//       <button onClick={() => setNum3(num3 - 1)}>Decrement</button>
//       <button onClick={() => setNum3(num3 + 1)}>Increment</button>
//     </>
//   );
// }

// import { useState } from "react";

// export default function StateExample(){
//     let [num, setNum] = useState(1)
//     return(
//         <>
//         <h1>State Example</h1>
//         <h2>num = {num}</h2>
//         <button onClick={()=>setNum(num-1)}>Decrement</button>
//         <button onClick={()=>setNum(num+1)}>Increment</button>
//         </>
//     )
// }

// import { useState } from "react";

// export default function StateExample(){
//     let [num, setNum] = useState(1)
//     function decrement(){
//         setNum(num-1) // best
//         // setNum(num--) // Incorrect
//         // setNUm(--num) // correct
//     }

//       function increment(){
//         setNum(num+1) // best
//         // setNum(num++) // Incorrect
//         // setNUm(++num) // correct
//     }

//     return(
//         <>
//         <h1>State Example</h1>
//         <h2>num= {num}</h2>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={increment}>Increment</button>
//         </>
//     )
// }
