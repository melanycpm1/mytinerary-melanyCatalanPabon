import axios from "axios";

const getCityByName=async(name)=>{
    try {
        const promesa= await axios ('http://localhost:4000/api/cities/' + name)
        return promesa.data
    } catch (error) {
        return []
    }
}

export default getCityByName