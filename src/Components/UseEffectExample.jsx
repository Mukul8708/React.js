import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {
    let[num1, setNum1] = useState(1)
    let[num2, setNum2] = useState(1)
    let[num3, setNum3] = useState(1)
    let count = 0
    useEffect(()=>{
        let time = setInterval(()=>{
            count++
            if (count === 30){
                alert("Session Timeout")
                count = 0
            }
            else
                console.log(count)
        },1000)
        return ()=> clearInterval(time)
    })
    // useEffect(()=>{
    //     console.log("useEffect Without Dependency Array is called")
    // })      // Call setup function every time when component is rendered

    // useEffect(()=>{
    //     console.log("useEffect with Dependency Array is called")
    // },[])    // call setup function only one time on initial render

    // useEffect(()=>{
    //     console.log("useEffect with Dependency Array is called")
    // },[num2])   // call setup function every time when num2 is updated
  return (
    <>
      <h1>useEffectExample</h1>
      <h2>num1={num1}|num2={num2}|num3={num3}</h2>
      <button onClick={()=>setNum1(num1+1)}>Increment Num1</button>
      <button onClick={()=>setNum2(num2+1)}>Increment Num1</button>
      <button onClick={()=>setNum3(num3+1)}>Increment Num1</button>
    </>
  )
}
