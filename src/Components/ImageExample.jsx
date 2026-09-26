import React from 'react'
import pic from "../assets/images/acer1.jpg"
export default function ImageExample() {
  return (
    <>
      <img src={pic} height={333} width={500} alt="Images"/>
      <img src="/images/acer1.jpg" height={333} width={500} alt="Image" />
      <img src="/images/acer2.jpg" height={333} width={500} alt="Image" />
    </>
  )
}
