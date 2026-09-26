import React from 'react'

export default function Child(props) {
    let Data=[
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
     <h2>This is Child Component</h2>
     <button onClick={(()=>props.setData(Data))}>Send Data to Parent</button> 
    </>
  )
}
