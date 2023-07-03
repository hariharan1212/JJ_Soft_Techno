import React from "react";

import {BsPencil} from "react-icons/bs"  
import {RiDeleteBin5Fill} from "react-icons/ri" 
import {IoMdRefresh} from "react-icons/io"

export default function SummaryDivrhs(){
    return (
        <>
         <div className="Summarydivrhs">
          <div>
            <div style={{
              width:"auto",
              height:"190px",
              borderRadius:"10px",
             margin:"30px 10px 15px 0",
             background:"#FFFFFF"
            }}>
             <div>
             <p style={{fontSize:"13px",marginLeft:"10px"}}> <b> Meeting Details </b></p>
             </div>
             <div className="formdiv">
                <div style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                  <label>Meeting Mode<span  style={{color:"red"}}>*</span></label><br/>
                  <select name="select" id="empty-select" style={{width:"218px",height:"20px",fontSize:"10px",outline:"none",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select mode--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select> 
                </div>
                <div style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                  <label>Meeting Date<span style={{color:"red"}}>*</span></label><br/>
                  <input type="date" class="form-control" style={{width:"218px",fontSize:"10px"}}/>
                </div>
                <div style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                  <label>Enter meeting subject<span style={{color:"red"}}>*</span></label><br/>
                  <input type="text" class="form-control" placeholder="Enter here" style={{width:"218px",fontSize:"10px"}}/>
                </div>
                <div style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                  <label>Meeting time<span style={{color:"red"}}>*</span></label><br/>
                  <input type="time" class="form-control"style={{width:"215px",fontSize:"10px"}} />
                </div>
                </div>  
                <div style={{margin:"10px 0 0 10px",fontSize:"12px"}}>
                  <label>Meeting Date<span style={{color:"red"}}>*</span> </label> <br/>
                  <textarea class="form-control" style={{margin:"0px 0px 0 5px" ,width:"98%",height:"50px"}}> </textarea>
                </div>
            
            </div>
            <div style={{
              width:"auto",
              height:"190px",
              borderRadius:"10px",
              margin:"25px 10px 15px 0",
              background:"#FFFFFF"
            }}>
              <div>
              <p style={{fontSize:"13px",marginLeft:"10px"}}> <b>Add User Who Needs To Be Part Of This MOM</b></p>
              </div>
              <div  style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                <label>Choose Admin<span style={{color:"red"}}>*</span></label> <br/>
                <select name="select" id="empty-select" style={{width:"98.5%",height:"30px",fontSize:"10px",outline:"none",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select mode--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select> 
              </div>
              <div style={{display:"inline-flex",margin:"0 0 0 10px",fontSize:"12px"}}>
                <div style={{width:"400px"}}>
                       <label>Attendees List<span style={{color:"red"}}>*</span></label><br/>
                       <input type="text" class="form-control" placeholder="Enter here" style={{width:"380px",height:"30px",fontSize:"10px"}}/>
                </div>
                <div style={{width:"400px"}}>
                    <label>E-mail<span style={{color:"red"}}>*</span></label> <br/>
                       <input type="text" class="form-control" placeholder="Enter your mail" style={{width:"500px",height:"30px",fontSize:"10px"}}/>
                </div>
              </div>
              <div style={{display:"inline-flex"}}>
                <div style={{fontSize:"10px",margin:"10px 0px 5px 20px"}}>
                <input type="file"  multiple style={{color:"#a95bf1"}}/>
                </div>
                <div style={{fontSize:"10px",margin:"10px 0px 5px 220px"}}>
                <input type="file"  multiple style={{color:"#a95bf1"}}/>
                </div>
              </div>
              </div>
              <div style={{
              width:"auto",
              height:"190px",
              borderRadius:"10px",
              margin:"20px 10px 0 0",
              background:"#FFFFFF"
            }}>
              <div>
              <p style={{fontSize:"13px",marginLeft:"10px"}}>  <b>User Access</b></p>
              </div>
              <div style={{margin:"-13px 0 0 10px",fontSize:"12px"}}>
                <label>Search<span style={{color:"red"}}>*</span></label> <br/>
                <input type="text" placeholder="Search people here"  class="form-control" style={{width:"450px",height:"30px",fontSize:"10px"}}/>
              </div>
              <div className="tablediv" style={{margin:"10px 0 0px 10px",fontSize:"13px",width:"950px"}}>
                <table>
                  <tr>
                    <th>EMP.no</th>
                    <th>EMP.Name</th>
                    <th>Role</th>
                    <th>Provide Access To</th>
                  </tr>
                  <tr>
                    <td><b>Sample1</b></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td> <select name="select" id="empty-select" style={{width:"100px",height:"15px",fontSize:"10px",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select> </td>
                  </tr>
                  <tr>
                  <td><b>Sample2</b></td>
                    <td>Atony</td>
                    <td>Thomson</td>
                    <td><select name="select" id="empty-select" style={{width:"100px",height:"15px",fontSize:"10px",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select></td>
                    </tr>
                    <tr>
                    <td><b>Sample3</b></td>
                    <td>Larry The Bird</td>
                    <td>@Twitter</td>
                    <td><select name="select" id="empty-select" style={{width:"100px",height:"15px",fontSize:"10px",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select></td>
                    </tr>
                </table>
              </div>
              </div>
              <div style={{
              width:"auto",
              height:"420px",
              borderRadius:"10px",
              margin:"20px 10px 0 0",
              background:"#FFFFFF"
            }}>
              <div style={{display:"inline-flex" , width:"100%"}}>
                <div style={{width:"50%"}}>
                    <div>
                     <p style={{fontSize:"13px",marginLeft:"10px"}}><b>Meeting Inputs</b></p>
                    </div>
                    <div style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                        <p> <b> Add Inputs</b></p> 
                    </div>
                    <div  style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                        <button style={{ background:"#a95bf1" , border:"none",height:"25px",borderRadius:"3px",margin:"5px",color:"white",outline:"none"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Information(I)</a></button>  
                        <button style={{ background:"white" , border:"1px solid #a95bf1",height:"25px",borderRadius:"3px",margin:"5px",color:"#a95bf1",outline:"none"}}><a href="#" style={{textDecoration:"none",color:"#a95bf1"}}>Decesion(D)</a></button>
                        <button style={{ background:"white" , border:"1px solid #a95bf1",height:"25px",borderRadius:"3px",margin:"5px",color:"#a95bf1",outline:"none"}}><a href="#" style={{textDecoration:"none",color:"#a95bf1"}}>Task(T)</a></button>
                  </div>
                  <div  style={{margin:"10px 0 0 10px",fontSize:"12px"}}>
                    <label>Enter Descripition<span style={{color:"red"}}>*</span></label>
                    <textarea  class="form-control" ></textarea>
                  </div>
                  <div  style={{margin:"10px 0 0 10px",fontSize:"12px"}}>
                    <input type="file"  multiple style={{color:"#a95bf1"}}/>
                    <button style={{marginLeft:"120px",outline:"none",border:"1px solid #a95bf1",color:"#a95bf1",background:"white"}}><a href="#" style={{textDecoration:"none",color:"#a95bf1"}}>ADD</a></button>
                  </div>
                </div>
                <div  style={{width:"50%"}}>
                    <div style={{fontSize:"10px",margin:"5px 10px 0 0 ",textAlign:"end"}}>
                      <p> <a href="#" style={{color:"black"}}><IoMdRefresh/></a> Meeting inputs <a href="#" style={{textDecoration:"underline"}}>View History</a></p>
                    </div>
                    <div style={{margin:"-10px 0 0 10px",fontSize:"10px"}}>
                        <p> <b>Meeting Inputs (09 Entries)</b></p>
                    </div>
                  <div style={{display:"inline-flex"}}>
                    <div style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                            <label>Attendies List<span style={{color:"red"}}>*</span></label><br/>
                            <input type="text" placeholder="Enterhere" style={{width:"212px",fontSize:"10px",height:"30px",outline:"none",border:"1px solid gainsboro",borderRadius:"5px"}}/>
                    </div>
                    <div style={{margin:"-10px 0 0 10px",fontSize:"12px"}}>
                    <label>Attendies List<span style={{color:"red"}}>*</span></label><br/>
                    <select name="select" id="empty-select" style={{width:"212px",height:"30px",fontSize:"10px",outline:"none",border:"1px solid gainsboro",borderRadius:"5px"}}>
                 <option >--Select--</option>
                 <option>Empty</option>
                 <option >Empty</option>
                 <option >Empty</option>
                   </select> 
                      </div>
                  </div>
                  <div style={{width:"95%",height:"100px",border:"1px solid #d1abf5",margin:"20px 5px 0 10px",borderRadius:"10px",padding:"3px"}}> 
                  <div >
                        <p style={{margin:"0 0 0 5px",fontSize:"10px"}} > <b>Meeting Inputs (09 Entries) </b> <a href="#" style={{paddingLeft:"230px",color:"#a95bf1"}}><BsPencil/></a> <a href="#" style={{color:"#ee9898"}}><RiDeleteBin5Fill/></a></p><br/>
                        <p  style={{margin:"-20px 0 0 5px",fontSize:"10px"}}>Created on-03-July-2023-<span style={{color:" #a95bf1"}}>Decision (D)</span></p> <br/>
                        <p  style={{margin:"-20px 0 0 5px",fontSize:"12px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec leo viverra, pharetra metus non, interdum lectus. Mauris in venenatis orci. Suspendisse potenti.</p>
                    </div>
                  </div>
                   <div style={{width:"95%",height:"100px",border:"1px solid #d1abf5",margin:"20px 5px 0 10px",borderRadius:"10px",padding:"3px"}}>
                   <div>
                        <p style={{margin:"0 0 0 5px",fontSize:"10px"}}><b>Meeting Inputs (09 Entries)</b><a  href="#" style={{paddingLeft:"230px",color:"#a95bf1"}}><BsPencil/></a> <a href="#" style={{color:"#ee9898"}}><RiDeleteBin5Fill/></a></p><br/>
                        <p style={{margin:"-20px  0 0 5px",fontSize:"10px"}}>Created on-03-07-2023-<span style={{color:" #a95bf1"}}>Decision (D)</span></p> <br/>
                        <p style={{margin:"-20px  0 0 5px",fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec leo viverra, pharetra metus non, interdum lectus. Mauris in venenatis orci. Suspendisse potenti. </p>
                    </div>
                    </div>
                  </div>
              </div>
              </div>
          </div>
         </div> 
        </>
    )
}