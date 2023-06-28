import { addCash,getmembershipNo ,addChequeOnline,getaccount,getCash,getChequeOnline} from '../../API/api';
import Withdraw from './WithdrawType'

import { useState, useEffect } from 'react'

const Update = () => {
  const initial={transactiontype:"",accountnumber:"",member:"",amount:""}
  const[getmem,setmem]=useState([]);
  const [getdata, setdata] = useState(initial);
  const[getpaymode,setpaymode]=useState({payMode:"cash"});
  const[getAllAccount,setAllAccount]=useState([]);
  
  const[getError,setError]=useState({});
  
  useEffect(()=>
  {
     if(getError)
     {
      
      
      if(getdata.transactiontype!="")
      {
      console.log("from useEffect");
      getError.transactiontype="";
      }
       if(getdata.accountnumber.length>=0)
      { 
        console.log("from account");
        getError.accountnumber="";
      }
     }
     
  },[getdata])

  useEffect(()=>{
    setmember();
 },[])

 const setmember=async()=>{
   let b=await getmembershipNo();
   let c=await getCash();
   console.log(c.data[0].accountnumber);
    
   
   console.log("sumit");
   setmem(b.data);
   
 }
 let memc=getmem.map(k=>(k._id)

    )
    console.log("hii");
    console.log(memc[0]);

    
  const getinput = (input) => {
    
    setdata({ ...getdata, [input.target.name]: input.target.value })
  }

  console.log(getdata)

  const [getRadio, setRadio] = useState(false)



  
 

  const pay=(e)=>
  {
      
      setpaymode({...getpaymode,[e.target.name]:e.target.value});
      console.log("hii this is from pay")
      console.log(getpaymode);
  }
   
  

 const payment=async()=>{
  let a={"membershipnumber":memc[0].toString()};
 let get=Object.assign(getdata,a);
  setdata(get);
  console.log("hii from payment");
  console.log(get);
  if(getpaymode.payMode=="cash")
  {
   
   let b=Object.assign(get,getpaymode);
    console.log(b);
    
   await addCash(b);
  }
  else{
    
    let c=Object.assign(get,getpaymode);
    console.log(c);
   await addChequeOnline(c);
  }
  
 }
  
 const[account,setaccount]=useState();
 useEffect(()=>{
  allAccount();
    
    
  },[])


const allAccount=async()=>{
 const da=await getaccount();
 console.log("heloo");
 console.log(da.data[0].companyaccount);

 setaccount(da.data);
}


if(getpaymode.companyaccount!=null){
 console.log(getpaymode.companyaccount);
 
 console.log(account.find(o=>o.companyaccount==getpaymode.companyaccount).bankname);}


 const handleError=(e)=>
 {
  if(e.target.name=="transactiontype")
  {
    if(getdata.transactiontype=="")
    {
      let a="please select transaction type";
      setError({...getError,[e.target.name]:a});
      console.log(e.target.name);
      console.log("from error");
    }
    else{
      setError({...getError,[e.target.name]:""});
    }
  }
   
  else if(e.target.name=="accountnumber")
  {
       let p=/^[0-9]{9,18}$/;
       if(getdata.accountnumber=="")
       {
        let a="account number required";
        setError({...getError,[e.target.name]:a});
       }
       else if(!p.test(e.target.value))
       {
        setError({...getError,[e.target.name]:"invalid account number"});
       }
       else{
            setError({...getError,[e.target.name]:""});
       }
  }

  // else if(e.targent.name=="member")
  // {
  //   if(e.target.value=="")
  //   {
  //     setError({...getError,[e.target.name]:"member number is required"});
  //   }
  //   else{
  //     setError({...getError,[e.target.name]:""});
  //   }
  // }
  else if(e.target.name=="amount")
  {
    if(e.target.value=="")
    {
      console.log("empty");
      setError({...getError,[e.target.name]:"enter amount"});
    }
    else if (e.target.value<1)
    {
      setError({...getError,[e.target.name]:"amount cannot be less than 1"});
    }
    else{
      setError({...getError,[e.target.name]:""});
    }
  }
 
   
 }



  return (
    // <table className="formtable">
    //   <caption className="formCaption">Transaction Form</caption>
    //   <tr>
    //     <td>
    //       <label htmlFor="">Transaction Type <span>*</span></label>
    //     </td>
    //     <td>
    //       <select
    //         className="box transF"

    //         required
    //         name="transactiontype"
    //         id="myselect"
    //         onChange={(e) => getinput(e)}
    //       >
    //         <option disabled selected value="">choose transc. type</option>
    //         <option value="withdraw">withdraw</option>
    //         <option value="deposit">deposit</option>
    //       </select>
    //     </td>
    //   </tr>
          
    //   {getdata.transactiontype === "deposit" ? (
    //     <tr>
    //       <td>Account Type:</td>
    //       <td><select onChange={(e)=>getinput(e)} name="accounttype" id="" className='box transF' required>
    //         <option value=""></option>
    //         <option value="saving">saving</option>
    //         <option value="FD">FD</option>
    //         <option value="RD">RD</option>
    //       </select></td>
    //     </tr>
    //   ) : (
    //     <></>
    //   )}
    //   {getdata.transactiontype == 'withdraw' ? (
    //     <Withdraw setdata={setdata} getdata={getdata} />
    //   ) : (
    //     <></>
    //   )}
    //   <tr>
    //     <td>
    //       <label>Account no. <span>*</span></label>
    //     </td>
    //     <td>
    //       <input
    //         onChange={(e) => getinput(e)}
    //         className="box transF"
    //         type="string"
    //         placeholder='account no....'
    //         minLength={13}
    //         maxLength={13}
    //          required
           
    //         name="accountnumber"
            
    //       />
    //     </td>
        
       
        
    //   </tr>
    //   <tr>
    //   <td>membership No. <span>*</span></td>
    //     <td><input type="number" name="member" required  className='transF'
    //     placeholder='membership no......' /></td>
    //   </tr>
    //   <tr>
    //     <td>
    //       <label htmlFor="">Amount <span>*</span></label>
    //     </td>
    //     <td>
    //       <input
    //         onChange={(e) => getinput(e)}
    //         type="number"
    //         name="amount"
    //         min="0"
    //         placeholder='0.0'
    //         required
    //         className='transF'
    //       />
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>
    //       <label>Transaction Date</label>
    //     </td>
    //     <td>
    //       <input
    //         onChange={(e) => getinput(e)}
    //         name="transactiondate"
    //         className="box"
    //         type="date"
    //       />
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>
    //       <label htmlFor="">Remarks (if any)</label>
    //     </td>
    //     <td>
    //       <textarea name="particular" onChange={(e)=>getinput(e)} className="box"  id="" cols="30" rows="2"></textarea>
    //     </td>
    //   </tr>
   

    //   <tr>
    //             <td>Pay Mode:</td>
    //             <td>
    //                 <td><input onClick={(e)=>pay(e)} type="radio" name="payMode" value="cash" defaultChecked /></td>
    //                 <td>Cash</td>
    //                 <td><input onClick={(e)=>pay(e)} type="radio" name="payMode" value="cheque"/></td>
    //                 <td>Cheque</td>
    //                 <td><input onClick={(e)=>pay(e)} type="radio" name="payMode" value="onlinetran"/></td>
    //                 <td>Online Tr.</td>
    //             </td>
    //         </tr>
    //         {getpaymode.payMode=="cash"?<></>:<>
    //          <br />
    //             <tr>
    //                 <td>Company bank Account:</td>
    //                 <td><select onChange={(e)=>pay(e)} name="companyaccount" className="account">
                    
    //                     <option value=""></option>
    //                     {account.map(d=>(
    //                       <>
    //                         {
    //                           <option > {d.companyaccount}</option>
                              
    //                         }
    //                       </>
    //                     )

    //                     )}
                        
    //                 </select></td>
    //             </tr>
    //             <tr>
    //                 <td>Bank Name:</td>
    //                 <td><select onChange={(e)=>pay(e)} name="bankname" id="">
    //                      <option value=""></option>
                        
    //                      (getpaymode.companyaccount!=null?<option >{account.find(o=>o.companyaccount==getpaymode.companyaccount).bankname}</option>:<></>)
    //                      }
                         
    //                 </select></td>
    //             </tr>
    //             </>}


      
      
      
      
      

    //    <br />
    //    <tr>
    //    <td></td>
    //     <td><input onClick={()=>{payment(); window.location.reload()}} type="button" value="submit" className="B" /></td>
        
    //    </tr>
    //    </table>

<>
<h1 className='thead'>Transaction</h1>

<form className='tra'>
  <ul>
  <li>

 <label className='la' >Transaction Type <span>*</span></label>
  <select
     className="box transF i1"

     required
     name="transactiontype"
     id="myselect"
     onChange={(e) => getinput(e)}
     onBlur={(e)=>handleError(e)}
   >
     <option disabled selected value="">choose transc. type</option>
     <option value="withdraw">withdraw</option>
     <option value="deposit">deposit</option>
   </select>
   
    <span className='error'>{getError.transactiontype}</span>

</li>
   

    {getdata.transactiontype === "deposit" ? (<li><label className='la'>Account Type<span>*</span></label>
    <select onChange={(e)=>getinput(e)} name="accounttype" id="" className='box transF i2' required>   
      <option value=""></option>     <option value="saving">saving</option>  
       <option value="FD">FD</option>    <option value="RD">RD</option>    </select></li>
      ):(<></>)}

      {getdata.transactiontype == 'withdraw' ? ( <Withdraw setdata={setdata} getdata={getdata} />
 ) : (
 <></>
 )}

 <li>
 <label className='la'>Account no. <span>*</span></label>
 
 <input
     onChange={(e) => getinput(e)}
     className="box transF i3"
     type="string"
     placeholder='account no....'
     minLength={13}
     maxLength={13}
      required
    
     name="accountnumber"
  
     onBlur={(e)=>handleError(e)}
     
   />
   
   <span className='error'>{getError.accountnumber}</span>
    </li>

    <li>
   <label className='la'> membership no.<span></span> </label>
    
   <input type="number" name="member" required  className='box transF i4'
         placeholder='membership no......'
         onBlur={(e)=>handleError(e)} />
        
         
        <span className='error'>{getError.member}</span>
    </li>

    <li>
    <label className='la'>Amount <span>*</span></label>
    <input
            onChange={(e) => getinput(e)}
            type="string"
            name="amount"
            min="1"
            placeholder='0.00'
            required
            className='box transF i5'
            onBlur={(e)=>handleError(e)}
          />
           <span className='error'>{getError.amount}</span>
    </li>

    <li>
    <label className='la'>Transaction Date &nbsp;</label>
    <input
            onChange={(e) => getinput(e)}
            name="transactiondate"
            className="box"
            type="date"
          />
           
    </li>
    <br />

    <li>
    <label className='la'>Remarks (if any) &nbsp;</label>
    <textarea name="particular" onChange={(e)=>getinput(e)} className="box"  id="" cols="30" rows="2"></textarea>
    </li>

     <li>
      <label  className='la'>PayMode&nbsp;</label>
      <input className='ra' onClick={(e)=>pay(e)} type="radio" name="payMode" value="cash" defaultChecked />
      <label className='ra'>Cash</label>
      <input className='ra' onClick={(e)=>pay(e)} type="radio" name="payMode" value="cheque"/>
      <label className='ra'>Cheque</label>
      <input className='ra'  onClick={(e)=>pay(e)} type="radio" name="payMode" value="onlinetran"/>
      <label className='ra'>Online Tr.</label>
     </li>

     


     {getpaymode.payMode=="cash"?<></>:<>
            <br />
               <li>
                   <label className='la'>Company bank Account<span>*</span></label>
                   <select onChange={(e)=>pay(e)} name="companyaccount" className="account">
                    
                       <option disabled selected value="">select account</option>
                       {account.map(d=>(
                         <>
                           {
                             <option > {d.companyaccount}</option>
                              
                           }
                         </>
                       )

                       )}
                        
                   </select>
                   </li>
               <li>
                   <label className='la'>Bank Name<span>*</span></label>
                    <select onChange={(e)=>pay(e)} name="bankname" id="">
                        <option  disabled selected value="">select bank name</option>
                        
                        {getpaymode.companyaccount!=null?<option >{account.find(o=>o.companyaccount==getpaymode.companyaccount).bankname}</option>:<></>}
                         
                   </select>
                   </li>
               </>}


               <br />
      
       <li>
       <input onClick={()=>{payment(); window.location.reload()}} type="button" value="submit" className="btnt"  />
       
       </li>
        
        
       
       

  </ul>
</form>

</>
  )
  }
export default Update


