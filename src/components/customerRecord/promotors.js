
import {useState,useEffect} from "react";
import { addpromotors } from "../../API/api";

const Motor=()=>{
    const[getpro,setpro]=useState({});
    const[getError,setError]=useState({});
    const promotors=(e)=>
    {
        console.log(e.target.value);
        setpro({...getpro,[e.target.name]:e.target.value})
    }

    const submit=()=>{
        console.log(getpro);
        addpromotors(getpro);
    }

    
    
   const handleError=(e)=>
   {
    
      
        
        if(e.target.name=="firstName" || e.target.name=="lastName")
        {
            let p= /[a-zA-Z]{2,10}/;
            if(e.target.value=="")
            {
                setError({...getError,[e.target.name]:" name required"});
                console.log(getError.firstName);
                console.log("null value");
            }
            else if(!p.test(e.target.value))
            {
                setError({...getError,[e.target.name]:"name should be of more than 2 and less than 10 characters"});
                console.log(getError.firstName);
                console.log("pattern");
            }
            else{
                setError({...getError,[e.target.name]:""});
            }
        
      }
      else if(e.target.name=="DOB")
      {
        if(e.target.value=="")
        {
            setError({...getError,[e.target.name]:"please enter your DOB"});
        }
        else 
        {
            setError({...getError,[e.target.name]:""})
        }
      }

      else if(e.target.name==="fatherName" ||e.target.name=="motherName")
      {
        let p=/^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/;
        if(e.target.value==="")
        {
            setError({...getError,[e.target.name]:"name required"});
        }
        else if(!p.test(e.target.value))
        {
            setError({...getError,[e.target.name]:"name should be firstname and last name and name should be minimum 2 character"})
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
      }
      else if(e.target.name==="email")
      {
        let p=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(e.target.value==="")
        {
            setError({...getError,[e.target.name]:"enter email"});
        }
        else if(!p.test(e.target.value))
        {
            setError({...getError,[e.target.name]:"enter email in proper format"});
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
      }

      else if(e.target.name==="number")
      {
        let p=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(e.target.value=="")
        {
            setError({...getError,[e.target.name]:"enter phone number"});
        }
        else if(!p.test(e.target.value))
        {
            setError({...getError,[e.target.name]:"enter valid mobile no."});
        }
      }

      else if(e.target.name==="aadhar")
      {
        let p=/^[1-9]{1}\d{3}\d{4}\d{4}$/;

        
      if(e.target.value==="")
      {
         setError({...getError,[e.target.name]:"enter aadhaar no."});
      }
      
      else if(!p.test(e.target.value))
      {
        setError({...getError,[e.target.name]:"enter valid aadhar no."});
      }
      else{
        setError({...getError,[e.target.name]:""});
      }

      }
      else if(e.target.name==="pan")
      {
        
        let p=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

        if(e.target.value==="")
        {
            setError({...getError,[e.target.name]:"enter pan no."});

        }
        else if(!p.test(e.target.value))
        {
            setError({...getError,[e.target.name]:"enter valid pan no."});
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
      }

      else if(e.target.name==="voter")
      {
        let p=/^([a-zA-Z]){3}([0-9]){7}?$/;
        if(e.target.value==="")
        {
          setError({...getError,[e.target.name]:"enter voter id"});
        }
        else if(!p.test(e.target.value))
        {
            setError({...getError,[e.target.name]:"enter valid voter id"});
        }
        else {
            setError({...getError,[e.target.name]:""});
        }
      }

      else if(e.target.name==="ration")
      {
        let p=/^([a-zA-Z0-9]){8,12}\s*$/;
        if(e.target.value=="")
        {
            setError({...getError,[e.target.name]:"enter ration card no."})
        }
        else if(!p.test(e.target.value))
        {
            setError({...getError,[e.target.name]:"enter valid ration card no."});
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
      }
      else if(e.target.name==="areal")
      {
        if(e.target.value==="")
        {
            setError({...getError,[e.target.name]:"enter your area"});
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
      }

      else if(e.target.name=="post")
      {
        if(e.target.value=="")
        {
            setError({...getError,[e.target.name]:"enter post name"});
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
      }
      
     else if(e.target.name=="dist")
     {
        if(e.target.value=="")
        {
            setError({...getError,[e.target.name]:"enter your district"});
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
     }

     else if(e.target.name=="state")
     {
        if(e.target.value=="")
        {
            setError({...getError,[e.target.name]:"enter your state"});
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
     }

     else if(e.target.name=="pincode")
     { 
        let p=/^[1-9]{1}\d{2}\s?\d{3}$/gm;

        if(e.target.value=="")
        {
            setError({...getError,[e.target.name]:"enter your pin code"});
        }
        else if(!p.test(e.target.value))
        {
            setError({...getError,[e.target.name]:"invalid pin code"});
        }
        else{
            setError({...getError,[e.target.name]:""});
        }
     }

   }


    
    return <>
    <h1 className='thead'>Promotor</h1>
    <form className="promotor">
    {/* <table className="promotor">
     <caption className="membercaption">PROMOTOR</caption>
     <tbody>
       
           
                    <tr>
                        <td id="genders" required >Gender<span>*</span></td>
                        <td>
                            <td><input className="pro" onChange={(e)=>promotors(e)} type="radio" name="gender" value="male" required /></td>
                            <td>M</td>
                            <td><input className="pro" onChange={(e)=>promotors(e)} type="radio" name="gender" value="female" required /></td>
                            <td>F</td>
                            <td><input className="pro" onChange={(e)=>promotors(e)} type="radio" name="gender" value="trans" required /></td>
                            <td>T</td>
                        </td>
                    </tr>
                    <tr>
                        <td id="firstnames" > First Name<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="firstName" required /></td>
                        <td>Middle Name:</td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="middleName" required /></td>
                    </tr>
                    <tr>
                        <td id="lastnames">Last Name<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="lastName" required /></td>
                        <td id="dobs">Date of Birth<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="date" name="name" required /></td>
                    </tr>
                    <tr>
                        <td id="fathernames">Father Name<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="fatherName" required /></td>
                        <td id="mothernames">Mother Name<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="motherName" required /></td>
                    </tr>
                    <tr>
                        <td id="emails">email<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="email" name="email" required /></td>
                        <td id="mobiles">Mobile<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="number" name="number" required /></td>
                    </tr>
                    <tr>
                        <td id="aadhars">Aadhar NO.<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="number" name="aadhar" required /></td>
                        <td id="pans">Pan No.<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="number" name="pan" required /></td>
                    </tr>
                    <tr>
                        <td id="voters">voter id.<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="number" name="voter" required /></td>
                        <td id="rations">Ration No.<span>*</span></td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="number" name="ration"  required /></td>
                    </tr>
                    <tr>
                        <td id="martials">martial status<span>*</span></td>
                        <td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="radio" name="martialstatus" value="married" required /></td>
                        <td>married</td>
                        <td><input className="pro" onChange={(e)=>promotors(e)} type="radio" name="martialstatus" value="unmarried"  required/></td>
                        <td>unmarried</td>
                        </td>
                    </tr>
                    <tr>
                    
                    {getpro.martialstatus=="married"?<><td>Spouse Name<span>*</span></td>
                    <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="spouse" required /></td></>:<></>}
                    
                   </tr>

                    <tr>
                    <td>Areal Locality<span>*</span>:</td>
                    <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="areal" required /></td>
                    <td>Land Mark:</td>
                    <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="Landmark" required /></td>
                </tr>
                <tr>
                    <td>Post<span>*</span></td>
                    <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="post" required /></td>
                    <td>Dist<span>*</span></td>
                    <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="dist" required /></td>
                    
                </tr>
                <tr>
                    <td>State<span>*</span></td>
                    <td><input className="pro" onChange={(e)=>promotors(e)} type="text" name="state" required /></td>
                    <td>Pin Code<span>*</span></td>
                    <td><input className="pro" onChange={(e)=>promotors(e)} type="number" name="pincode" required /></td>
                </tr>
                    
                <tr>
                 <td></td>
                 
                
                 
                <td><button id="btn" className="btns" onClick={()=>{submit();window.location.reload()}}>submit</button></td>
                </tr>
           
           </tbody>
           
           
           </table> */}




           
           <ul>
               <li>
                <label  id="genders"  >
                Gender<span>*</span>
                </label>
                
                <input defaultChecked className="pro" onChange={(e)=>promotors(e)} type="radio" name="gender" value="male" required />
                     
                     <label className="ra">M</label>
                            <input className="pro" onChange={(e)=>promotors(e)} type="radio" name="gender" value="female" required />
                     
                            
                            <label className="ra">F</label>
                            <input className="pro" onChange={(e)=>promotors(e)} type="radio" name="gender" value="trans" required />
                            <label className="ra">T</label>
               </li>
                
                <br />
                <br />

                <li>
                
                <div className="parent-D">
                    <div className="child-D"><label id="firstnames" className="laa" > First Name<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="firstName" required  pattern="[a-zA-Z]{2}"/>
                        <span className="error">{getError.firstName}</span>
             </div>
                    <div className="child-D">
                    <label className="laa" >Middle Name:</label>
                        <input className="pro" onChange={(e)=>promotors(e)} type="text" name="middleName" required />
                    </div>
                </div>
            </li>

                <li>
                    
                    <div className="parent-D">
                        <div className="child-D">
                        <label className="laa" id="lastnames" >Last Name<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="lastName" required />
                        <span className="error">{getError.lastName}</span>
                        </div>
                        <div className="child-D">
                        <sec className="right">
                <label className="laa" id="dobs">Date of Birth<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="date" name="DOB" required />
                </sec>
                <span className="error">{getError.DOB}</span>
                        </div>
                    </div>
              
               
            
                

                
                        
                </li>

                <li>
               
                 <div className="parent-D">
                    <div className="child-D">
                    <label className="laa" id="fathernames">Father Name<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="fatherName" required 
                         pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$"/>
                        <span className="error">{getError.fatherName}</span>
                    </div>
                    <div className="child-D">
                    <label className="laa" id="mothernames">Mother Name<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="motherName" 
                        pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$" required />
                        <span className="error">{getError.motherName}</span>
                    </div>
                 </div>

                

                       
                        
                       
                
                        
                </li>

                <li>
                    <div className="parent-D">
                        <div className="child-D"> 
                        <label className="laa" id="emails">email<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="string" name="email" required />
                        <span className="error">{getError.email}</span>
                        </div>
                        <div className="child-D">
                        <label className="laa" id="mobiles">Mobile<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="number" name="number"
                        pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" required />
                        <span className="error">{getError.number}</span>
                        </div>
                    </div>
                   
                   
                  
 
                 
                 
                 
                      
                       
                </li>

                <li>
               
               <div className="parent-D">
                  <div className="child-D">
                  <label className="laa" id="aadhars">Aadhar NO.<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="number" name="aadhar" 
                        pattern="^[1-9]{1}\d{3}\d{4}\d{4}$" required />
                        <span className="error">{getError.aadhar}</span>
                  </div>
                  <div className="child-D">
                  <label className="laa" id="pans">Pan No.<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="string" name="pan" 
                       pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$" required />
                        <span className="error">{getError.pan}</span>
                  </div>
               </div>
               
              

               
               
                
                        
                </li>

                <li>

                <div className="parent-D">
                    <div className="child-D">
                    <label className="laa" id="voters">voter id.<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="string" name="voter" 
                       pattern="^([a-zA-Z]){3}([0-9]){7}?$" required />
                        <span className="error">{getError.voter}</span>
                    </div>
                    <div className="child-D">
                    <label className="laa" id="rations">Ration No.<span>*</span></label>
                        <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="string" name="ration" 
                        pattern="^([a-zA-Z0-9]){8,12}\s*$" required />
                        <span className="error">{getError.ration}</span>
                    </div>
                </div>
                
                        
                </li>
                <br />
                <br />

                <li>

                
                <label  id="martials">martial status<span>*</span></label>
                        
                        <input className="pro" onChange={(e)=>promotors(e)} type="radio" name="martialstatus" value="married" required />
                        <label >married</label>
                        <input className="pro" onChange={(e)=>promotors(e)} type="radio" name="martialstatus" value="unmarried"  required/>
                        <label >unmarried</label>
                        
                </li>

                <li>
                 {getpro.martialstatus=="married"?<><label >Spouse Name<span>*</span></label>
                <input className="pro" onChange={(e)=>promotors(e)} type="text" name="spouse" required /></>:<></>}
                </li>
                 
                <br />
                <br />
                <li>
                <div className="parent-D">
                    <div className="child-D"> 
                    <label className="laa">Areal Locality<span>*</span>:</label>
                    <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="areal" required />
                    <span className="error">{getError.areal}</span>
                    </div>
                    <div className="child-D">
                    <label className="laa">Land Mark:</label>
                    <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="Landmark" required />
                    <span className="error">{getError.Landmark}</span>
                    </div>
                </div>
                
                    
                </li>

                <li>

                <div className="parent-D">
                    <div className="child-D">
                    <label className="laa">Post<span>*</span></label>
                    <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="post" required />
                    <span className="error">{getError.post}</span>
                    </div>
                    <div className="child-D">

                    <label className="laa">Dist<span>*</span></label>
                    <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="dist" required />
                    <span className="error">{getError.dist}</span>

                    </div>
                </div>

                
                    
                </li>

                <li>
                <div className="parent-D">
                    <div>
                    <label className="laa">State<span>*</span></label>
                    <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="text" name="state" required />
                    <span className="error">{getError.state}</span>
                    </div>
                    <div className="child-D pin">
                    <label className="laa">Pin Code<span>*</span></label>
                    <input className="pro" onBlur={(e)=>handleError(e)} onChange={(e)=>promotors(e)} type="number" name="pincode"
                    pattern="^[1-9]{1}\d{2}\s?\d{3}$" required />
                    <span className="error">{getError.pincode}</span>
                    </div>
                </div>
             
                    
                </li>
           </ul>
           <button  className="btns" onClick={()=>{submit();window.location.reload()}}>submit</button>
    </form>
    </>
}
export default Motor;