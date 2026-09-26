import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function ContactUsPage() {
  let[searParams]=useSearchParams()
  return (
    <>
     <h1>This is Contact Page</h1> 
     <h2>Name: {searParams.get("name")}</h2> 
     <h2>Email: {searParams.get("email")}</h2> 
     <h2>Phone: {searParams.get("phone")}</h2> 

    </>
  )
}
