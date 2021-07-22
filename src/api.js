import axios from "axios";

//posting the login data of the user
export function Postlogin(data){
    return axios.post(`http://localhost:5000/login`,data)
}

//posting the register data of the user
export function Postregister(data){
    return axios.post(`http://localhost:5000/register`,data)
}

//getting the details of user by email
export function GetuserbyEmail(id){
    return axios.get(`http://localhost:5000/user/${id}`)
}

export function PostSurvey(data){
    return axios.post(`http://localhost:5000/survey`,data)
}

export function GetuserbyID(id){
    return axios.get(`http://localhost:5000/users/${id}`)
}

//getting the details of survey by email
export function GetsurveybyEmail(id){
    return axios.get(`http://localhost:5000/survey/${id}`)
}