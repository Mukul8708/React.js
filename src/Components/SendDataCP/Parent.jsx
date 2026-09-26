import React,{useState} from 'react'
import Child from './Child'
export default function Parent() {
    let [data,setData]=useState([])
  return (
    <>
     <h1>Sending data from a Child Component to Parent Component(Lifting State UP)</h1>
     <h2>This is Parent Component</h2>
        {data.length ?
        <table border={2} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item=>{
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.dsg}</td>
                        <td>{item.salary}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                    </tr>
                })}
            </tbody>
        </table> :null} 
        <hr />
        <Child setData={setData}/>
    </>
  )
}
