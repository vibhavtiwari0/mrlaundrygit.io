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
    getUserData();
    alert("Thank you for ordering");
  };

  const prices={shirt:50,towel:120}
  const [total,setTotal]=useState()

  const calcTotal=()=>{
    console.log("calc called")
    let temp= shirt*prices?.shirt + towel*prices?.towel

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
                    <input type="text" name="name" onChange={(event) => setUname(event.target.value)} min={0} className="form-control" id="exampleFormControlInput1" />


                </div>
                <div className="row ">
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
                <div className="col-3 ">
                  <div className="row d-flex ">
                    <div style={{display: 'inline'}}>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue="${laundry.washing}" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          <h4>Washing</h4>
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue="${laundry.washing}" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          <h4>Ironing</h4>
                        </label>
                      </div>
                      <br /><br />
                      <div>
                        <form path="total_items" ><h6><b>Total Amount</b> {total}</h6></form>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <a className=" col-2 btn btn-dark waves-light" href="javascript: void(0)" onClick={()=>calcTotal()}>Calculate </a>   
                  <button className=" col-2 ms-4 btn btn-dark waves-light" type="submit" value="save" name="save">Submit</button>
                </div>
              </form>
            </div>

            
            <div className="container col-lg-6  p-5 mt-5 " style={{backgroundColor: '#e6e6e6', borderRadius: '30px',  right: '80px', top: '100px'}}>
              <div className="col-lg-6">
                <table className="table">
                  {/* <thead>
                    <tr>
                      <th scope="col" className="px-3">Name</th>
                      <th scope="col" className="px-5">Mobno.</th>
                      <th className="px-3"><button className="btn btn-warning text-center" type="submit" >Update</button></th>
                      <th className="px-3"><button className="btn btn-danger text-center" type="submit" >Delete</button></th>
                    </tr>
                    <hr></hr>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col" className="px-5">Product</th>
                      <th scope="col" className="px-3">Quantity</th>
                    </tr>
                  </thead> */}
                  <thead>
                        <tr>
                            <th >UserName</th>
                            <th>Shirts</th>
                            <th>Pants</th>
                            <th>Jeans</th>
                            <th>Towel</th>
                            <th>bedsheet</th>
                            <th>Pillow Cover</th>
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

                          {/* <tr>
                            <th scope="row">1</th>
                            <td className="px-5">Shirts</td>
                            <td className="px-3"></td>
                          </tr>
                        
                  
                          <tr>
                            <th scope="row">2</th>
                            <td className="px-5">Pants</td>
                            <td className="px-3"></td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td className="px-5">Jeans</td>
                            <td className="px-3">{laundry.jeans}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td className="px-5">Towels</td>
                            <td className="px-3">{laundry.towel}</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td className="px-5">Bed Sheets</td>
                            <td className="px-3">{laundry.bedsheet}</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td className="px-5">Pillow Covers</td>
                            <td className="px-3">{laundry.pillow}</td>
                          </tr>
                       */}
                  
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