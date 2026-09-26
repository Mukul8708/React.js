var name ="Mukul"
var arr=[10,20,30,40,50,60,70,80,90,100]
var emp={
    id:1001,
    name:"Mukul",
    dsg: "Student",
    salary:18900,
    city:"Hisar",
    state:"Haryana"
}
class Test{
    show(){
        return(
            <h2>In show() of test class</h2>
        )
    }
}
var test = new Test
function ModuleExample(){
    return(
    <>
    <h1>Module Example</h1>
    <h2>This is function Components</h2>
    </>
    )
}
export default ModuleExample
export{name,arr,emp,test}