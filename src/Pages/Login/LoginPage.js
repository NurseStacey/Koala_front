import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AxiosInstance from "../../utils/Axios"
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../../constants"


function Login_Form() {
    
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword]=useState("")
   //console.log( localStorage.getItem(REFRESH_TOKEN))

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        try {
 
            const res=await AxiosInstance.post("user/token/", {username, password})
  
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

           const refreshToken = localStorage.getItem(REFRESH_TOKEN)      
            
            navigate("/")
        }
        catch (error){
            alert(error)
        }
    }    
    return <>
        <form onSubmit={handleSubmit} >

 
                        <label htmlFor="user_name">User Name</label>
                        <input 
                            type="text"
                            id="user_name"
                            placeholder="Username"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                        />                    
 

                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        /> 
                        
                        <button
                        onClick={handleSubmit}>Login</button>
          </form>
    </>
}

export default Login_Form