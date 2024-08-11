// function Accorrdian(){

import { useState } from "react"

//     const data = [
//         {
//             id : 1,
//             name : "piku"
//         },
//         {
//             id : 2,
//             name : "rima",
//         },
//         {
//             id : 3,
//             name : "sonu"
//         },
//         {
//             id : 4,
//             name : "rohan"
//         }
//     ]

//     return(
//         <>
//             <div>
//                 {
//                     data.map((data , index)=>{
//                         return (
//                             <div key={index}>
//                             <p>{data.id}</p>
//                             <p>{data.name}</p>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
// export default Accorrdian;


    

function Accordian(){
   
    const data = [
        {
            id : 1,
            message : "1. What do you call a boomerang that won’t come back?"
        },
        {
            id : 2,
            message  :"2. What does a cloud wear under his raincoat? "
        },
        {
            id : 3,
           message  :"3. Two pickles fell out of a jar onto the floor. What did one say to the other? "
        },
        {
            id : 4,
             message  :"4. What time is it when the clock strikes 13? "
        },
        {
            id : 2,
            message  :" 5. How does a cucumber become a pickle?"
        },
        {
            id : 3,
           message  :"6. What did one toilet say to the other? "
        },
        {
            id : 4,
             message  :" 7. What do you think of that new diner on the moon?"
        }
    
    ]
    return(
        <>
            {
                data.map((data , index)=>{
                    return(
                        <DataDisplay data = {data.message} key={index}/>
                    )
                })
            }
        </>
    )
}
export default Accordian;

function DataDisplay({data}){
console.log(data)
    const [display , setDisplay] = useState(false)
    return(
        <>
      <div>
                            <h1 onClick={()=>{
                                setDisplay((prev)=>!prev)
                            }}>+</h1>
                            <p style={{
                                display : display ? "flex" : "none"
                            }}>{data}</p>
                        </div>
        </>
    )
    
                      
}