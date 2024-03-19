import axios from "axios";

const getCityByName=async(_id)=>{
    try {
        const promesa= await axios ('http://localhost:4000/api/cities/' + _id)
        return promesa.data
    } catch (error) {
        return []
    }
}

export default getCityByName