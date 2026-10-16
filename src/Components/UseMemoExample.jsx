import React, { useMemo, useState } from 'react'

function calculatiion(num){
    let sum = 0 
    for(let i=1; i<=30000000+num;i++){
        sum= sum+i
    }
    return sum
}

export default function UseMemoExample() {
    let[num1,Setnum1] = useState(1)
    let[num2,Setnum2] = useState(1)
    let[num3,Setnum3] = useState(1)
    let sum =useMemo(()=>calculatiion(num2),[num2])
  return (
    <>
      <h1>useMemo Example</h1>
      <h2>num1={num1}| num2={num2}|num3={num3}</h2>
      <h3>sum={sum}</h3>
      <button onClick={()=>Setnum1(num1+1)}>Increment Num1</button>
      <button onClick={()=>Setnum2(num2+1)}>Increment Num2</button>
      <button onClick={()=>Setnum3(num3+1)}>Increment Num3</button>
    </>
  )
}
