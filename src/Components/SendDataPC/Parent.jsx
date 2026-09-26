import React from 'react'
import Child from './Child'
export default function Parent() {
   let data = [
      {id:1001,name:"Mayank Sharma",dsg:"Trainer",salary:189000,city:"Noida",state:"UP"},
      {id:1002,name:"Deepak Kumar",dsg:"Counseller",salary:270000,city:"Noida",state:"UP"},
      {id:1003,name:"Awaneesh Singh",dsg:"Accountant",salary:450000,city:"Gurugram",state:"Haryana"},
      {id:1004,name:"Ayush Narayan",dsg:"Trainer",salary:189000,city:"faridabad",state:"Haryana"},
      {id:1005,name:"Tushar Kabdwal",dsg:"Counseller",salary:420000,city:"Noida",state:"UP"},
      {id:1006,name:"Mayank Sharma",dsg:"Trainer",salary:189000,city:"Noida",state:"UP"},
      {id:1007,name:"Mayank Sharma",dsg:"Trainer",salary:189000,city:"Noida",state:"UP"},
     ] 
  return (
    <>
    <h1>Sending data from Parent to Child Component using props </h1>
    <h2>This is Parent Component</h2>
    <hr />
    <Child
    data ={data}
    name = "Mukul"
    arr={[10,20,30,40,50]}
    />
    </>
  )
}
