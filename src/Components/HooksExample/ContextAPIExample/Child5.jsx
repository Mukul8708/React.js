import React from 'react'
import { DesignationContext, NameContext, SalaryContext } from './Parent'

export default function Child5() {
  return (
    <>
      <h2>This is Child5 Component</h2>
      <NameContext.Consumer>
        {(value)=>{
            return <h3>Name : {value}</h3>
        }}
      </NameContext.Consumer>
      <DesignationContext.Consumer>
        {(value)=>{
            return <h3>Designation : {value}</h3>
        }}
      </DesignationContext.Consumer>
      <SalaryContext.Consumer>
        {(value)=>{
            return <h3>Salary : {value}</h3>
        }}
      </SalaryContext.Consumer>
    </>
  )
}
