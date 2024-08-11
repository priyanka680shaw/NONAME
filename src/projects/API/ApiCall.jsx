import axios from "axios"
import { useState } from "react"
function ApiCall(){
    const [imgurl , setImgUrl] = useState()
    const baseUrl = "https://api.unsplash.com/"
    const key = "zwbuqqbMVj4Wkliuq99CTW96MG4SySO4n6HJid8tcxc"
    async function fetchImage(){
        const response = await axios.get("https://api.unsplash.com/photos/random" , 
            {
                headers : {Authorization: `Client-ID ${key}`}
            }
        )
        console.log(response.data.urls.raw )
        setImgUrl(response.data.urls.raw )

    }
    return(
        <>
                <button onClick={()=>{
                    fetchImage()
                }}>click</button>
                <img src = {imgurl}  alt = "image" style={{width : "500px"}}/>
        </>
    )
}

export default ApiCall;