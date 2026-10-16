import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    let[num1,Setnum1] = useState(1)
    let[num2,Setnum2] = useState(1)
    let[num3,Setnum3] = useState(1)

    let child = useCallback(<Child/ >, [num2])
    console.log("Parent Component is Rendered")
  return (
    <>
      <h1>useCallback Example</h1>
      <h2>This is Parent Component</h2>
      <h2>num1={num1}| num2={num2}|num3={num3}</h2>
      <button onClick={()=>Setnum1(num1+1)}>Increment Num1</button>
      <button onClick={()=>Setnum2(num2+1)}>Increment Num2</button>
      <button onClick={()=>Setnum3(num3+1)}>Increment Num3</button>
      <hr />
      {child}
    </>
  )
}
















// import React,{useState} from 'react'
// import Child from './Child'
// export default function Parent() {
//     let [data,setData]=useState([])
//   return (
//     <>
//      <h1>Sending data from a Child Component to Parent Component(Lifting State UP)</h1>
//      <h2>This is Parent Component</h2>
//         {data.length ?
//         <table border={2} cellPadding={10} cellSpacing={0}>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Designation</th>
//                     <th>Salary</th>
//                     <th>City</th>
//                     <th>State</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map(item=>{
//                     return <tr key={item.id}>
//                         <td>{item.id}</td>
//                         <td>{item.name}</td>
//                         <td>{item.dsg}</td>
//                         <td>{item.salary}</td>
//                         <td>{item.city}</td>
//                         <td>{item.state}</td>
//                     </tr>
//                 })}
//             </tbody>
//         </table> :null} 
//         <hr />
//         <Child setData={setData}/>
//     </>
//   )
// }
