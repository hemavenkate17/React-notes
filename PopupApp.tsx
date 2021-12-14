 import axios from "axios"
// import Popup from './Popup';
// import React, { useEffect, useState } from 'react';


// type Employee={
//   Employee_id:number;
//   Requestee:string;
//   EmployeeManager:string;
//   RequestDescription:string;
//   Status:string;
  
// }

// function PopupApp() {
// const [isOpen, setIsOpen] = useState(false);

// const togglePopup = () => {
//   setIsOpen(!isOpen);
// }



  
//         //const employee_id = {props.setid}
        
       
//        const[status,setstatus]=useState("")
//       async function viewdetails(){
//           try{
//               let response =
//                 await axios.get("http://localhost:8000/employees/viewdetails?id="+1000)
//                 setViewData(response.data)
          
//             }
            
//           catch(e){
//               setViewData([])
//           }
//       }
//       async function statusupdate(){
//         try{
//             let response =
//               await axios.get("http://localhost:8000/employees/statusupdate?status="+status+"&id="+1000)
//               setViewData(response.data)
        
//           }
          
//         catch(e){
//             setViewData([])
//         }
//     }
//         useEffect(()=>{
//         viewdetails()
//       },[]
//       )
//   const [viewData,setViewData] =useState([])    
//   return <div>
//     <input id="popup"
//       type="button"
//       value="View details"
//       onClick={togglePopup}/>

//     {isOpen && <Popup
//       content={<>
 
//                {viewData.map((x:Employee)=>{
//                     <form>
//                       <h1>Soft lock Request Confirmation</h1>
//                       <h5>Status update for Request lock</h5>
//                     <label>Employee_id</label>
//                     <input type="number" readOnly>{x.Employee_id}</input>
//                     <label> Requestee </label>
//                     <input type="text" readOnly>{x.Requestee}</input>
//                     <label> Employee Manager </label>
//                     <input type="text" readOnly>{x.EmployeeManager}</input>
//                     <label> Status </label>
//                     <select value={status} onChange={(e)=>{setstatus(e.target.value)}}>
//                         <option >Approved</option>
//                         <option>Rejected</option>
//                     </select>
//                     <br/>
//                     <input type="submit" value="submit" onClick={()=>statusupdate()}></input>
//                     </form>
//                   })
//                 }
//       </>}
//       handleClose={togglePopup}
//     />}
//   </div>
// }

              
  



// export default PopupApp
