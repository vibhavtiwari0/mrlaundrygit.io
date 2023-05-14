import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FontAwesomeIcons/index'

import { Link } from "react-router-dom";
import { addlaundry, fetchLaundry, removeLaundry } from "../services/UserApiService";



export function AddLaundry () {
  const [laundrylist,setLaundryList]=useState([]);
  const [name,setUname]=useState("");
  const [shirt, setShirt] = useState("");
  const [pants, setPant] = useState("");
  const [jeans, setJeans] = useState("");
  const [towel, setTowel] = useState("");
  const [bedsheet, setBedsheet] = useState("");
  const [pillow, setPillow] = useState("");
  const [iron, setIron] = useState("");

  const UserData = {
    "name":name,
    "shirt": shirt,
    "pants":pants,
    "jeans": jeans,
    "towel": towel,
    "bedsheet":bedsheet,
    "pillow":pillow
    
  };

  async  function getUserData(){
    const response = await fetchLaundry(UserData.name);
    console.log(response.data);
    setLaundryList(response.data);
  }
//   useEffect(() => {
//     getUserData();
// }, []);
  const deleteLaundry=(e)=>{
    e.preventDefault();
    removeLaundry(name);
    
    alert("You canceled your Order")
    getUserData();
  }

  const saveTutorial = (e) => {
    e.preventDefault();
    addlaundry(UserData);

    console.log(UserData);
    // getUserData();
    alert("Thank you for ordering");
  };

  const prices={shirt:50,pants:50,towel:30,jeans:60,bedsheet:80,pillow:30}
  const [total,setTotal]=useState()

  const calcTotal=()=>{
    console.log("calc called")
    let temp= shirt*prices?.shirt + towel*prices?.towel +jeans*prices?.jeans + pants*prices?.pants + bedsheet*prices?.bedsheet +pillow*prices?.pillow

    setTotal(temp)
    console.log(temp)

  }
  
  
    
        return (
            <>
             <div>
        
        <div className="container">
          <div className="row">
            <div className=" col-lg-5  p-5 mt-5" style={{backgroundColor: '#e6e6e6', borderRadius: '30px', left: '80px', top: '100px'}}>
              <form onSubmit={saveTutorial}>
                <div className="row mb-3">
                  <h1 style={{marginTop: '-15px'}}>Order your laundry</h1>
                </div>
                <div className="row">
                <label htmlFor="exampleFormControlInput1" className="form-label">UserName</label>
                    <input type="text" name="name" onChange={(event) => setUname(event.target.value)} min={0} className="form-control" id="exampleFormControlInput1" required/>


                </div>
                <div className="row mt-3">
                  <div className="mb-3 col-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Shirts</label>
                    <input type="number" name="shirt" onChange={(event) => setShirt(event.target.value)} min={0} className="form-control" id="exampleFormControlInput1" />
                  </div>
                  <div className="mb-3 col-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Pants</label>
                    <input type="number"  min={0} name="pants" onChange={(event) => setPant(event.target.value)} className="form-control" id="exampleFormControlInput1" />
                  </div>
                  <div className="mb-3 col-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Jeans</label>
                    <input type="number" min={0} name="jeans" onChange={(event) => setJeans(event.target.value)} className="form-control" id="exampleFormControlInput1" />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Towels</label>
                      <input type="number" min={0} name="towel" onChange={(event) => setTowel(event.target.value)} className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3 col-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Bed Sheets</label>
                      <input type="number" min={0}  name="bedsheet" onChange={(event) => setBedsheet(event.target.value)} className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3 col-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Pillow Covers</label>
                      <input type="number" min={0} name="pillow" onChange={(event) => setPillow(event.target.value)} className="form-control" id="exampleFormControlInput1" />
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row d-flex ">
                    <div style={{display: 'inline'}}>
                      <div className="form-check">
                        <input className="form-check-input flexCheckChecked" type="checkbox"  />
                        <label class="form-check-label" for="flexCheckChecked">

                          <h4>Washing</h4>
                        </label>
                      </div>
                   
                      <br /><br />
                      <div>
                        <h6><b>Total Amount</b></h6>
                        <span class="badge  text-bg-dark"><h2>Rs {total}</h2></span>

                        </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <a className=" col-3 btn btn-dark waves-light" href="javascript: void(0)" onClick={()=>calcTotal()}>Calculate </a>   
                  <button className=" col-3 ms-4 btn btn-dark waves-light" type="submit" value="save" name="save">Submit</button>
                </div>
              </form>
            </div>

            
            <div className="container col-lg-6  p-5 mt-5 " style={{backgroundColor: '#e6e6e6', borderRadius: '30px',  right: '80px', top: '100px'}}>
              <div className="col-lg-6">
                <div>
                  <button className="btn btn-dark" onClick={getUserData}>Show Order Details</button>
                </div>
                <table className="table table-hover mt-5">
             
                  <thead className="table-dark">
                        <tr>
                            <th >UserName</th>
                            <th>Shirts</th>
                            <th>Pants</th>
                            <th>Jeans</th>
                            <th>Towel</th>
                            <th>Bedsheet</th>
                            <th>Covers</th>
                            <th>Actions</th>
                          
                            
                            
                        </tr>
                    </thead>

                  <tbody>
                  {
                            laundrylist.map((user) => {
                                return (
                                    <tr>
                                      <td>{user.name}</td>
                                        <td>{user.shirt}</td>
                                        <td>{user.pants}</td>
                                        <td>{user.jeans}</td>
                                        <td>{user.towel}</td>
                                        <td>{user.bedsheet}</td>
                                        <td>{user.pillow}</td>
                                        <td><button className="btn btn-danger btn-sm" type="submit" onClick={deleteLaundry}>Delete</button></td>
                                        
                                        {/* <td><button variant="danger" className="btn-sm" onClick={() => {
                                            setSelectedUserId(user.id);
                                           openModal();
                                        }}>Delete</button></td> */}
                                    </tr>
                                )
                            })
                        }

                   
                  
                  </tbody>
                   
                </table>
                   
              </div>
            </div>
          </div>
        </div>
      </div>
  
      
        

            </>
   
            




);
      
      

        
}