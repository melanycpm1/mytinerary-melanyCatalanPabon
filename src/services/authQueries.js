import axios from "axios";

const register = async(data)=>{
    try {
        const response= await  axios.post("http://localhost:4000/api/auth/register",data)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

const login=async(data)=>{
    try{
        const response=await axios.post('http://localhost:4000/api/auth/login',data);
        const tokenUsuario=response.data.data.token
        console.log("token:"+tokenUsuario)
        localStorage.setItem("token",tokenUsuario)
        return response.data
    }catch(error){
        return error.response.data
    }
}

const loginWithToken=async()=>{
    try{
        const token=localStorage.getItem("token")
        const response=await axios.post('http://localhost:4000/api//auth/token',{},{
                headers: {
                    Authorization: 'Bearer '+ token
                }
        });
        console.log(response.data)
        return response.data
    }catch(error){
        return error.response.data
    }
}

export default{
    register,
    login,
    loginWithToken
}