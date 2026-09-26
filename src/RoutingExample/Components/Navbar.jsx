import React from 'react'
import {Link,NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    {
       <ul className='mb-5'>
        <li className='mx-2'><Link to ="" >Home</Link></li>
        <li className='mx-2'><Link to ="/about" >About</Link></li>
        <li className='mx-2'><Link to ="/profile/Mukul/Student/189000" >Profile</Link></li>
        <li className='mx-2'><Link to ="/contact?name=Mukul&email=mkpandey609@gmail.com&phone=8708399260" >Contact</Link></li>
       </ul> 
     } 


    {/* {
        <ul>
            <li><NavLink to = "">Home</NavLink></li>
            <li><NavLink to = "/about">About</NavLink></li>
            <li><NavLink to = "/profile">Profile</NavLink></li>
            <li><NavLink to = "/contact">Contact</NavLink></li>
        </ul>
    } */}
    
    
     {/* {
       <ul>
        <li><Link to ="" >Home</Link></li>
        <li><Link to ="/about" >About</Link></li>
        <li><Link to ="/profile" >Profile</Link></li>
        <li><Link to ="/contact" >Contact</Link></li>
       </ul> 
     }  */}

     <br />
     <br />
     <br />
     <br />
     <br />
     <hr />
    </>
  )
}
