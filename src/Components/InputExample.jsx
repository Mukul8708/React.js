import React, { useState } from 'react'

export default function InputExample() {
    let [data,setData]= useState({
        name:"",
        email:"",
        phone:"",
        designation:"",
        salary:"",
        city:"",
        state:""
    })
    function getInputData(e){
        let{name,value} = e.target
        setData({...data,[name]: value})
    }

    function postData(e){
        e.preventDefault()
        alert(`
            Name :  ${data.name}
            Email:  ${data.email}
            Phone:  ${data.phone}
            Designation:  ${data.designation}
            Salary:  ${data.salary}
            City:  ${data.city}
            State:  ${data.state}
            `)
    }
  return (
    <>
     <div className="main">
        <div className="center">
            <h3>Input Example</h3>
            <h4>Name:{data.name}</h4>
            <h4>Email:{data.email}</h4>
            <h4>Phone:{data.phone}</h4>
            <h4>Designation:{data.designation}</h4>
            <h4>Salary:{data.salary}</h4>
            <h4>City:{data.city}</h4>
            <h4>State:{data.state}</h4>
            <form onSubmit={postData}>
            <input type="text" required name="name" onChange={getInputData} placeholder='Full Name' />
            <input type="email" required name="email" onChange={getInputData} placeholder='Email Address' />
            <input type="text" required name="phone" onChange={getInputData} placeholder='Phone number' />
            <input type="text" required name="designation" onChange={getInputData} placeholder='Designation' />
            <input type="number" required name="salary" onChange={getInputData} placeholder='Salary' />
            <input type="text" required name="city" onChange={getInputData} placeholder='City' />
            <input type="text" required name="state" onChange={getInputData} placeholder='State' />
            <button type='submit'>Submit</button>
            </form>
        </div>
     </div>
    </>
  )
}




// import React, { useState } from 'react'

// export default function InputExample() {
//     let [name,setName]= useState("")
//     let [email,setEmail]= useState("")
//     let [phone,setPhone]= useState("")
//     let [designation,setDesignation]= useState("")
//     let [salary,setSalary]= useState("")
//     let [city,setCity]= useState("")
//     let [state,setState]= useState("")
//     function postData(){
//         alert(`
//             Name :  ${name}
//             Email:  ${email}
//             Phone:  ${phone}
//             Designation:  ${designation}
//             Salary:  ${salary}
//             City:  ${city}
//             State:  ${state}
//             `)
//     }
//   return (
//     <>
//      <div className="main">
//         <div className="center">
//             <h3>Input Example</h3>
//             <h4>Name:{name}</h4>
//             <h4>Email:{email}</h4>
//             <h4>Phone:{phone}</h4>
//             <h4>Designation:{designation}</h4>
//             <h4>Salary:{salary}</h4>
//             <h4>City:{city}</h4>
//             <h4>State:{state}</h4>
//             <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder='Full Name' />
//             <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address' />
//             <input type="text" name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder='Phone number' />
//             <input type="text" name="designation" onChange={(e)=>setDesignation(e.target.value)} placeholder='Designation' />
//             <input type="number" name="salary" onChange={(e)=>setSalary(e.target.value)} placeholder='Salary' />
//             <input type="text" name="city" onChange={(e)=>setCity(e.target.value)} placeholder='City' />
//             <input type="text" name="state" onChange={(e)=>setState(e.target.value)} placeholder='State' />
//             <button onClick={postData}>Submit</button>
//         </div>
//      </div>
//     </>
//   )
// }







// import React, { useState } from 'react'

// export default function InputExample() {
//     let [name,setName]= useState("")
//     function postData(){
//         alert(`Hello:${name}`)
//     }
//   return (
//     <>
//      <div className="main">
//         <div className="center">
//             <h3>Input Example</h3>
//             <h4>Name:{name}</h4>
//             <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder='Full Name' />
//             <button onClick={postData}>Submit</button>
//         </div>
//      </div>
//     </>
//   )
// }
