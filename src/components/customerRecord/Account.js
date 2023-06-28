
import {account,getaccount} from "../../API/api";
import {useState,useEffect} from "react";


const Account =()=>{
    
    const[getError,setError]=useState({});
    const [getAccount,setAccount]=useState({});
    
    const data=(e)=>{
        setAccount({...getAccount,[e.target.name]:e.target.value});
        console.log(getAccount);
    }

const Submit=async()=>{
    console.log("clicked");
  await account(getAccount);
}

const handleError=(e)=>
{
   if(e.target.name=="bankname")
   {
     if(e.target.value=="")
     {
      setError({...getError,[e.target.name]:"please select bank name"});
     }

     else{
      setError({...getError,[e.target.name]:""});
     }

   }

   else if(e.target.name=="companyaccount")
   {
    let p=/^[0-9]{9,18}$/;
    if(e.target.value=="")
    {
      setError({...getError,[e.target.name]:"Acc. number required!"});
    }
    else if(!p.test(e.target.value))
    {
      setError({...getError,[e.target.name]:"invalid account number"});
    }
    else{
      setError({...getError,[e.target.name]:""});
    }
   }

   else if(e.target.name=="IFSC")
   {
     let p =/^[A-Z]{4}0[A-Z0-9]{6}$/;
     if(e.target.value=="")
     {
      setError({...getError,[e.target.name]:"IFSC required!"});
     }
     else if(!p.test(e.target.value))
     {
      setError({...getError,[e.target.name]:"invalid IFSC code"});
     }
     else{
      setError({...getError,[e.target.name]:""});
     }
   }
   
}



return <>
<h1 className='thead'>Account</h1>
<form  className="acc">
   {/* <table className="accounttable">
    <caption className="accountcaption">Index Account</caption>
    <tbody>
       <tr>
       <td>Account opening Date <span>*</span></td>
        <td><input onChange={(e)=>data(e)} type="date" className="date" name="accountopeningdate"/></td>
       
       <td>Bank Name <span>*</span> </td>
            <td><input onChange={(e)=>data(e)} type="text" name="bankname" /></td>
        
           
        
       </tr>

       <tr>
        
          
          <td>Account No. <span>*</span></td>
            <td><input onChange={(e)=>data(e)} name="companyaccount" type="number" /></td>
          
          <td>IFSC Code <span>*</span> </td>
            <td><input onChange={(e)=>data(e)}  type="text" name="IFSC" id="" /></td>
            
        
       </tr>
       
       <tr>
        <td>Account Active <span>*</span></td>
        <td><td><input onChange={(e)=>data(e)} value="yes" type="radio" name="accountactive"/></td>
        <td>Yes</td>
        <td><input onChange={(e)=>data(e)} value="no" type="radio" name="accountactive" /></td>
        <td>No</td>
        </td>
        <td>
          use for printer <span>*</span>  
        </td>
        <td>
            <td><input onChange={(e)=>data(e)} value="yes" type="radio" name="useforprinter"/></td>
            <td>Yes</td>
            <td><input onChange={(e)=>data(e)}  type="radio" name="useforprinter" value="no" /></td>
            <td>No</td>
        </td>
       </tr>
    
     <tr>
        <td></td>
        
        <td><input onClick={()=>{Submit();window.location.reload()}} type="button"  value="submit" className="btns"/></td>
     </tr>
    
    </tbody>
    
   </table> */}
   <ul>
   <li>
   <div className="parent-D">
  
  <div>
 <label className="laa"> Date <span>*</span></label> 
      <input onBlur={(e)=>handleError(e)} onChange={(e)=>data(e)} type="date" className="date" name="accountopeningdate" required />
      
  </div>
  <div>
  <label className="laa">Bank Name <span>*</span> </label>
          {/* <input onChange={(e)=>data(e)} type="text" name="bankname" required /> */}
          <select name="bankname"  onBlur={(e)=>handleError(e)} onChange={(e)=>data(e)}   required  className="select">
            <option disabled selected value="">Select Bank Name</option>
            <option value="state bank of india" >SBI</option>
            <option value="bank of india">BOI</option>
            <option value="punjab bank of india">PNB</option>
            <option value="HDFC bank">HDFC</option>
          </select>
          <span className="error">{getError.bankname}</span>
  </div>
</div>
   </li>

   <li>
    <div className="parent-D">
      <div>
      <label className="laa">Account No. <span>*</span></label>
            <input onChange={(e)=>data(e)} onBlur={(e)=>handleError(e)} name="companyaccount" type="String" className="bankacc"  pattern="^[0-9]{9,18}$" required />
            <span className="error">{getError.companyaccount}</span>
      </div>
      <div>
      <label className="laa">IFSC Code <span>*</span> </label>
            <input onChange={(e)=>data(e)} onBlur={(e)=>handleError(e)}  type="text" name="IFSC" id="" required  pattern="^[A-Z]{4}0[A-Z0-9]{6}$"/>
            <span className="error">{getError.IFSC}</span>
      </div>
    </div>
   </li>
  
  <li>
  <div className="parent-D">
    <div className="child-D">
    <label className="laa" >Account Active <span>*</span></label>
        <input onChange={(e)=>data(e)} defaultChecked value="yes" type="radio" name="accountactive" required />
        <label>Yes</label>
        <input onChange={(e)=>data(e)} value="no" type="radio" name="accountactive" required />
        <label>No</label>
    </div>
    
    <div className="child-D">
    <label className="laa">
          use for printer <span>*</span>  
        </label>
        
            <input onChange={(e)=>data(e)} defaultChecked value="yes" type="radio" name="useforprinter" required/>
            <label>Yes</label>
            <input onChange={(e)=>data(e)}  type="radio" name="useforprinter" value="no" required />
            <label>No</label>
        
    </div>

  </div>
 
  </li>
   

  </ul>
  <input onClick={()=>{Submit();window.location.reload()}} type="button"  value="submit" className="btns"/>  
  {/* <button onClick={()=>{Submit();window.location.reload()}} type="button"   className="btns" >submit</button> */}

</form>
</>
}
export default Account;