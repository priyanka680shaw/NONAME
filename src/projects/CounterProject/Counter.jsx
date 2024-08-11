import { useState } from "react";

const Counter = ()=>{
    const [count , setCount] = useState(0)
    return(
        
        <>
            <div>
                <button onClick={()=>{
                    setCount((prev) => prev+1)
                }}>+</button>
                <h1>{count}</h1>
                <button onClick={()=>{
                    setCount((prev)=>{
                        if(prev > 0){
                            return prev-1;
                        }
                        return setCount(0); 
                    })
                }}>-</button>
            </div>
        </>
    )
}
export default Counter;