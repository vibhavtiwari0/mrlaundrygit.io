import axios from "axios";

const BASE_URL = "http://localhost:8080/laundry/remove";
const BASE_URL1 = "http://localhost:8080/laundry/byname";
const BASE_URL2 = "http://localhost:8080/laundry/login";


export async function getAllCentersFromServer() {
  return axios.get(BASE_URL);
}

export async function deleteCenterFromServer(id) {
  return axios.delete(`${BASE_URL}/${id}`);
}


export async function savedata(feedback) {
  return axios.post("http://localhost:8080/post", feedback);
}

export async function addlaundry(laundry) {
  return axios.post("http://localhost:8080/laundry", laundry);
}

export async function laundryGet() {
  return axios.get("http://localhost:8080/laundry/{id}");
}

export async function fetchLaundry(name){
return axios.get(`${BASE_URL1}/${name}`);

}
export async function fetchLogin(username,pass){
  return axios.get(`${BASE_URL2}/${username}/${pass}`);
  
  }

  export async function removeLaundry(name){
    return axios.delete(`${BASE_URL}/${name}`);
    
    }
    export async function fetchUserList() {
      return axios.get("http://localhost:8080/laundry/AdminList");
    
    }
    export async function deleteUserbyId(deleteUser) {
      console.log(deleteUser);
      return axios.delete(`http://localhost:8080/laundry/AdminList/${deleteUser}`);
    
    
    }


// export async function saveUser(Users){
//     try {
//         const response = await fetch(BASE_URL,{
//             method:'POST',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(Users)

//         })
//         const data=await response.json();
//         return data;

//     } catch (error) {
//         console.log(error);
//     }
// }


// export async function getAllUsers(){
 
//     try {
//     const response= await fetch(BASE_URL);
//     const data=await response.json();
//     return data;
        
//     } catch (error) {
//         console.log(error);
//     }
 
 
    
// }

