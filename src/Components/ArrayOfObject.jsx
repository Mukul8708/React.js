export default function ArrayOfObject(){
    let data = [
        {id:1001,name:"Mayank Sharma",dsg:"Trainer",salary:189000,city:"Noida",state:"UP"},
        {id:1002,name:"Deepak Kumar",dsg:"Counseller",salary:270000,city:"Noida",state:"UP"},
        {id:1003,name:"Awaneesh Singh",dsg:"Accountant",salary:450000,city:"Gurugram",state:"Haryana"},
        {id:1004,name:"Ayush Narayan",dsg:"Trainer",salary:189000,city:"faridabad",state:"Haryana"},
        {id:1005,name:"Tushar Kabdwal",dsg:"Counseller",salary:420000,city:"Noida",state:"UP"},
        {id:1006,name:"Mayank Sharma",dsg:"Trainer",salary:189000,city:"Noida",state:"UP"},
        {id:1007,name:"Mayank Sharma",dsg:"Trainer",salary:189000,city:"Noida",state:"UP"},
    ]
    return(
        <>
        <h1>Employee Record</h1>
        <table border ={2} cellpadding = {10} cellSpacing={0}>
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
                {data.map((item,index)=>{
                    return <tr key = {index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.dsg}</td>
                        <td>{item.salary}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                    </tr>
                }
            )}
            </tbody>
        </table>
        </>
    )
}