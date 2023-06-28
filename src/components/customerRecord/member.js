import { addPersonal,addFinnacial, addCash,addChequeOnline,membership,getmembershipNo} from "../../API/api";
import {useState,useEffect} from "react";



const Member=()=>
{
  
    

    const[getpersonal,setpersonal]=useState({});
    const[getfinancial,setfinancial]=useState({});
    const[Nominee1,setdefault1]=useState(false);
    const[Nominee2,setdefault2]=useState(false);
    const[Nominee3,setdefault3]=useState(false);
    const[getpaymode,setpaymode]=useState({payMode:"cash"});
    const [getmember,setmember]=useState({});
    const[getmem,setmem]=useState([]);
    const[getError,setError]=useState({});
    
    


    
 


   const personal=async()=>
   {
    console.log("hii");
    let a=Object.assign(Nominee1,Nominee2);
    let b=Object.assign(a,Nominee3);
    let c=Object.assign(b,getpersonal)
   await addPersonal(c);
   
   }
   const finnacial =async()=>
   {
    console.log(getfinancial);
    await addFinnacial(getfinancial);
    
   }
   
    const setp=(e)=>
    {
        setpersonal({...getpersonal,[e.target.name]:e.target.value});
        console.log(getpersonal);
    }
    const setf=(e)=>
    {
        setfinancial({...getfinancial,[e.target.name]:e.target.value});
        console.log(getfinancial);
    }
    useEffect(()=>{
     
    },[])
    const nominee1=()=>
    {
        
        if(Nominee1==true)
        {
            setdefault1(false);
        }
        else
        {
            setdefault1(true);
        }
       
    }
    const nominee2=()=>
    {
        
        if(Nominee2==true)
        {
            setdefault2(false);
        }
        else
        {
            setdefault2(true);
        }
       
    }
    const nominee3=()=>
    {
        
        if(Nominee3==true)
        {
            setdefault3(false);
        }
        else
        {
            setdefault3(true);
        }
       
    }
    const pay=(e)=>
    {
        
        setpaymode({...getpaymode,[e.target.name]:e.target.value});
        console.log(getpaymode);
    }
    const payment=async()=>
    { 
        let memnumber={"membershipnumber":memc[0].toString()};
        console.log("hello from payment");
        console.log(memnumber);
        let paymodenumber = Object.assign(memnumber,getpaymode);
        //let paymodenumber={...getpaymode,...memnumber};
       setpaymode(paymodenumber);
        console.log("hello from member payment");
        console.log(paymodenumber);
        
       if(getpaymode.payMode=="cash")
       {
        await addCash(paymodenumber);
       }
       else{
        await addChequeOnline(paymodenumber);
       }
       mem();
       
    }
    const setm=(e)=>
    {
        setmember({[e.target.name]:e.target.value});
    }
    const memb=async()=>
    {
        console.log(getmember);
        await membership(getmember);
    }
   

    useEffect(()=>{
        console.log("before reloading");
     mem();
     
    console.log("reloaded");
      },[])
      
      
     const mem=async()=>
     {
     let b= await getmembershipNo();
     setmem(b.data);
     }
     let memc=getmem.map(k=>(k._id)
     
  
      )
      console.log("hii");
      console.log(memc);
      console.log(memc[0]);



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
      else if(e.target.name=="date")
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

      else if(e.target.name=="father" ||e.target.name=="mother")
      {
        let p=/^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/;
        if(e.target.value=="")
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
      else if(e.target.name=="email")
      {
        let p=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(e.target.value=="")
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

      else if(e.target.name=="phone")
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

      else if(e.target.name=="aadhar")
      {
        let p=/^[1-9]{1}\d{3}\d{4}\d{4}$/;

        
      if(e.target.value=="")
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
      else if(e.target.name=="pan")
      {
        
        let p=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

        if(e.target.value=="")
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

      else if(e.target.name=="voter")
      {
        let p=/^([a-zA-Z]){3}([0-9]){7}?$/;
        if(e.target.value=="")
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

      else if(e.target.name=="ration")
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
      else if(e.target.name=="areal")
      {
        if(e.target.value=="")
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

    
    
    
    return (<form className="memb">
    
        <div>
        <table className="member ">
        <caption className="membercaption">DETAILS</caption>
            <table className="membership">
                <caption className="caption"> PERSONAL DETAILS</caption>
                <tbody>
                <tr>
                <td>membership no.</td>
                <td><input type="text" value={memc} name="membershipnumber" className="memberno" disabled/></td>
                </tr>
                   <tr>
                   <td>Title <span>*</span></td>
                   <td>
                   <td><input defaultChecked onChange={(e)=>setp(e)} type="radio" name="title" value="Mr." required /></td>
                   <td>Mr.</td>
                   <td><input onChange={(e)=>setp(e)} type="radio" name="title" value="Ms." required /></td>
                   <td>Ms.</td>
                   
                   </td>
                   
                   </tr>
                   <tr>
                    <td>First Name<span>*</span></td>
                    <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)} type="text" name="firstName"
                     pattern="[a-zA-Z]{2}" required/>
                    <span className="error">{getError.firstName}</span></td>
                    <td>Middle Name:</td>
                    <td><input onChange={(e)=>setp(e)} type="text" name="middleName"  /></td>
                    
                   </tr>

                   <tr>
                   <td>Last Name<span>*</span></td>
                    <td><input onChange={(e)=>setp(e)} type="text" name="lastName" 
                    onBlur={(e)=>handleError(e)} required/>
                    <span className="error">{getError.lastName}</span></td>
                     <td>Date of Birth<span>*</span></td>
                     <td><input className="pro date" onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)}  type="date" name="date" required/>
                     <span className="error">{getError.date}</span> </td>
                    
                    
                   </tr>

                   

                   <tr>
                    <td>Father Name:</td>
                    <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)} 
                    pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$" type="text" name="father" required />
                    <span className="error">{getError.father}</span></td>
                    <td>Mother Name:</td>
                    <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)}
                      pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$" type="text" name="mother" required  />
                      <span className="error">{getError.mother}</span> </td>
                   </tr>
                   <tr>
                   <td>Gender:</td>
                    
                    <td>
                    <td><input defaultChecked onChange={(e)=>setp(e)} type="radio" name="gender" value="Male" required /></td>
                        <td>M</td>
                        <td><input  onChange={(e)=>setp(e)} type="radio" name="gender" value="Female" required /></td>
                        <td>F</td>
                        <td><input onChange={(e)=>setp(e)} type="radio" name="gender" value="Transgender" required /></td>
                        <td>T</td>
                    </td>
                    <td>Martial Status:</td>
                    <td>
                        <td><input onChange={(e)=>setp(e)} type="radio" name="martial" value="married"/></td>
                        <td>Married</td>
                        <td><input defaultChecked onChange={(e)=>setp(e)} type="radio" name="martial" value="unmarried" /></td>
                        <td>Unmarried</td>
                    </td>
                   </tr>
                  

                   <tr>
                    
                    {getpersonal.martial=="married"?<><td>Spouse Name:</td>
                    <td><input onChange={(e)=>setp(e)} type="text" name="spouse" /></td></>:<></>}
                    
                   </tr>

                   <tr>
                   
                   </tr>

                   
                    </tbody>
                    
                    
               
            </table>

            <table className="membership">
                <caption className="caption">CONTACT DETAILS</caption>
                <tbody>
                    <tr>
                        <td>email <span>*</span></td>
                        <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)} type="email" name="email" required />
                        <span className="error">{getError.email}</span></td>
                        <td>Mobile No. <span>*</span></td>
                        <td><input  onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)}
                         pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" type="tel" name="phone" required />
                         <span className="error">{getError.phone}</span></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Aadhar No.<span>*</span></td>
                        <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setf(e)}
                         pattern="^[1-9]{1}\d{3}\d{4}\d{4}$" type="number" name="aadhar" required />
                          <span className="error">{getError.aadhar}</span></td>
                        <td>Pan No.<span>*</span></td>
                        <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setf(e)}
                         pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$" type="number" name="pan"  required/>
                          <span className="error">{getError.pan}</span></td>
                        
                    </tr>

                    <tr>
                        <td>
                         Voter id No.<span>*</span>
                        </td>
                        <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setf(e)} 
                          pattern="^([a-zA-Z]){3}([0-9]){7}?$" type="text" name="voter" id="" required />
                          <span className="error">{getError.voter}</span></td>
                        <td>Ration Card No.<span>*</span></td>
                        <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setf(e)} 
                         pattern="^([a-zA-Z0-9]){8,12}\s*$" type="Number" name="ration" required />
                          <span className="error">{getError.ration}</span></td>
                    </tr>
                   
                </tbody>
            </table>

         <table className="membership">
            <caption className="caption">ADDRESS</caption>
            <tbody>
                <tr>
                    <td>Areal Locality<span>*</span>:</td>
                    <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)} type="text" name="areal" required/>
                    <span className="error">{getError.areal}</span></td>
                    <td>Land Mark:</td>
                    <td><input onChange={(e)=>setp(e)} type="text" name="Landmark" required /></td>
                </tr>
                <tr>
                    <td>Post<span>*</span></td>
                    <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)} type="text" name="post" required/>
                    <span className="error">{getError.post}</span></td>
                    <td>Dist<span>*</span></td>
                    <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)} type="text" name="dist"  required/>
                    <span className="error">{getError.dist}</span></td>
                    
                </tr>
                <tr>
                    <td>State<span>*</span></td>
                    <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)} type="text" name="state" required />
                    <span className="error">{getError.state}</span></td>
                    <td>Pin Code<span>*</span></td>
                    <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>setp(e)} 
                    pattern="^[1-9]{1}\d{2}\s?\d{3}$" type="number" name="pincode"  required/>
                    <span className="error">{getError.pincode}</span></td>
                </tr>
            </tbody>
         </table>
         <table className="membership">
            <caption className="caption">NOMINNIEE DETAILS</caption>
            <tr>
                <td></td>
                <td><ul className="unordered">
                
                <li><input onClick={()=>nominee1()} className="nominee" type="button" name="nominee1" value="Add Nominee1" /></li>
              
              {Nominee1==true?<>
                <table className="nomi">
                <tbody>
                    <tr>
                       
                       <td>name:</td>
                        <td><input onChange={(e)=>setf(e)} type="text" name="name1" /></td>
                      
                        <td>relation:</td>
                        <td><input onChange={(e)=>setf(e)} type="text" name="relation1" /></td>
                       
                        
                    </tr>
                    <tr>
                        
                            <td>email:</td>
                            <td><input onChange={(e)=>setf(e)} type="email" name="email1" /></td>
                            
                        
                        
                            <td>Mobile No.</td>
                            <td><input onChange={(e)=>setf(e)} type="tel" name="phone1"/></td>
                        
                    </tr>
                    <tr>
                        
                            <td>Aadhar No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number" name="aadhar1" /></td>
                        
                        
                            <td>Pan No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number" name="pan1" /></td>
                        
                    </tr>
                    <tr>
                        
                            <td>voter id No.</td>
                            <td><input onChange={(e)=>setf(e)} type="text" name="voter1"/></td>
                        
                        
                            <td>Ration Card No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number" name="ration1" /></td>
                        
                    </tr>
                    </tbody>
                </table>
              </>:<></>}
                   
                <br />
                <li><input onClick={()=>nominee2()} className="nominee" type="button" name="nominee2" value="Add Nominee2" /></li>
                {Nominee2==true?<>
                <table className="nomi">
                <tbody>
                    <tr>
                       
                       <td>name:</td>
                        <td><input onChange={(e)=>setf(e)} type="text" name="name2" /></td>
                       
                       
                        <td>relation:</td>
                        <td><input onChange={(e)=>setf(e)} type="text" name="relation2" /></td>
                       
                        
                    </tr>
                    <tr>
                        
                            <td>email:</td>
                            <td><input onChange={(e)=>setf(e)} type="email" name="email2" /></td>
                            
                        
                            <td>Mobile No.</td>
                            <td><input onChange={(e)=>setf(e)} type="tel" name="phone2" /></td>
                        
                    </tr>
                    <tr>
                        
                            <td>Aadhar No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number"  name="aadhar2" /></td>
                        
                            <td>Pan No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number" name="pan2" /></td>
                       
                    </tr>
                    <tr>
                        
                            <td>voter id No.</td>
                            <td><input onChange={(e)=>setf(e)} type="text" name="voter2" /></td>
                        
                            <td>Ration Card No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number" name="ration2"/></td>
                       
                    </tr>
                    </tbody>
                </table>
              </>:<></>}
                <br />
                <li><input onClick={()=>nominee3()} className="nominee" type="button" name="nominee3"  value="Add Nominee3"/></li>
                {Nominee3==true?<>
                <table className="nomi">
                <tbody>
                    <tr>
                       
                       <td>name:</td>
                        <td><input onChange={(e)=>setf(e)} type="text" name="name3"/></td>
                       
                        <td>relation:</td>
                        <td><input onChange={(e)=>setf(e)} type="text" name="relation3" /></td>
                       
                        
                    </tr>
                    <tr>
                        
                            <td>email:</td>
                            <td><input onChange={(e)=>setf(e)} type="email" name="email3"/></td>
                            
                        
                            <td>Mobile No.</td>
                            <td><input onChange={(e)=>setf(e)} type="tel" name="phone3"/></td>
                        
                    </tr>
                    <tr>
                       
                            <td>Aadhar No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number" name="aadhar3" /></td>
                        
                        
                            <td>Pan No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number" name="pan3"/></td>
                        
                    </tr>
                    <tr>
                        
                            <td>voter id No.</td>
                            <td><input onChange={(e)=>setf(e)} type="text" name="voter3" /></td>
                       
                        
                            <td>Ration Card No.</td>
                            <td><input onChange={(e)=>setf(e)} type="number" name="ration3"/></td>
                        
                    </tr>
                    </tbody>
                </table>
              </>:<></>}
                </ul></td>
                
            </tr>
         </table>
         <table className="membership">
            <caption className="caption">SHARES </caption>
            <tr>
                <td>Pay Mode:</td>
                <td>
                    <td><input onClick={(e)=>pay(e)} type="radio" name="payMode" value="cash" defaultChecked /></td>
                    <td>Cash</td>
                    <td><input onClick={(e)=>pay(e)} type="radio" name="payMode" value="cheque"/></td>
                    <td>Cheque</td>
                    <td><input onClick={(e)=>pay(e)} type="radio" name="payMode" value="onlinetran"/></td>
                    <td>Online Tr.</td>
                </td>
            </tr>
            {getpaymode.payMode=="cash"?<></>:<>
             <br />
                <tr>
                    <td>Company bank Account:</td>
                    <td><select onChange={(e)=>pay(e)} name="companybankaccount" className="account">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select></td>
                </tr>
                <tr>
                    <td>Bank Name:</td>
                    <td><select onChange={(e)=>pay(e)} name="bankname" id="">
                         <option value=""></option>
                        <option value="BOI">BOI(bank of india)</option>
                        <option value="SBI">SBI(state bank of india)</option>
                        <option value="PNB">PNB(punjab national bank)</option>
                    </select></td>
                </tr>
                </>}
                
            <br />
            <br />
            <tr>
                <td>Share Purchase amount<span>*</span></td>
                <td><input onBlur={(e)=>handleError(e)} onChange={(e)=>{setf(e);pay(e)}} type="number" name="shareamount" required /></td>
                <td>No. of Share<span>*</span></td>
                <td><input onChange={(e)=>setf(e)} type="number" name="numberofshare"  defaultValue={10} required /></td>
                
            </tr>
            <tr>
                <td>Membership Charge<span>*</span></td>
                <input onBlur={(e)=>handleError(e)} onChange={(e)=>{setf(e);pay(e);setm(e);}} type="number" name="membershipamount" min="0" required />
                <td>
                  promotor<span>*</span>
                </td>
                <input type="text" required />
                
            </tr>
           
         </table>
         

         <tr>
            
            
            <td><input onClick={()=>{personal();finnacial();payment();memb();window.location.reload()}}  className="btn" type="submit" /></td>
           </tr>
         </table>
         
        
         
        </div>
    </form>
    );
}
export default Member;