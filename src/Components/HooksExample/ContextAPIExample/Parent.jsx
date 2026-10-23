import React, { createContext } from 'react'
import Child1 from './Child1'


export const NameContext = createContext()
export const DesignationContext = createContext()
export const SalaryContext = createContext()
export default function Parent() {
  return (
    <>
      <h2>This is Parent Context</h2>
      <hr />
      <NameContext.Provider value = "Mukul">
        <DesignationContext value = "Student">
            <SalaryContext value = {123400}>
                <Child1/>
            </SalaryContext>
        </DesignationContext>
      </NameContext.Provider>
    </>
  )
}
