 import axios from "axios"
// import { useEffect,useState } from "react"


// type Employee={
//     Employee_id:number;
//     Requestee:string;
//     EmployeeManager:string;
//     RequestDescription:string;
//     Status:string;
    
// }
// const ViewDetails=()=>{
//     async function viewdetails(){
//         try{
//             let response =
//               await axios.get("http://localhost:8000/employees/viewdetails?id="+wfm_manager)
//               setViewData(response.data)
         
//           }
          
//         catch(e){
//             setViewData([])
//         }
//     }
//     useEffect(()=>{
//      viewdetails()
//    },[]
       
//    )
//    const [viewData,setViewData] =useState([])
//     return (
//         viewData.map((x:Employee)=>{
//    <form>
//        <label>Employee_id</label>
//        <input type="number" readOnly>{x.Employee_id}</input>
//    </form>
//         })
    
//     )
// }

// export default ViewDetails;