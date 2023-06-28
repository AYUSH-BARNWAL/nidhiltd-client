
import {useState,useEffect} from "react";
import { getChequeOnline ,getaccount} from "../../API/api";


   const Test=()=>{
    
    const[getTransaction,setTransaction]=useState([]);
    const[getAccount,setAccount]=useState([]);
    const[getTable,setTable]=useState([]);
    const[getCurrentAccount,setCurrentAccount]=useState();
   

     
     
    
     

    useEffect(()=>
    {
        
        set();
       
        
       
    },[]);

   useEffect(()=>
   {
    if(getAccount.length!=0 & getTransaction.length!=0)
    {
        setT();
        console.log("called");
    }
   });

//   useEffect(()=>
//   {
//     window.location.reload(false);
//     return;
//   },[getCurrentAccount]);
    
      const set=async()=>
    {
       console.log(window.location.pathname.match(/(\d+)/)[0]);
       setCurrentAccount(window.location.pathname.match(/(\d+)/)[0]);
       const account=await getaccount();
       console.log(account.data);
       const  transaction=await getChequeOnline();

        setAccount(account.data);
        setTransaction(transaction.data);
        
        
       
        
    }
    
   

    const setT=()=>
    {
        console.log(getAccount);
        getAccount.forEach(element=>
            {
                console.log(element);
            })
        console.log(getTransaction);

        
        
    //    getAccount.map(element=>
    //     { 
    //       const  a= getTransaction.find( o => o.companyaccount==element.companyaccount);
    //        console.log(a);
    //       getTable.push(a);
    //        console.log(getTable);
        
    //     },
        getTransaction.map(element=>
            {
                if(element.companyaccount==getCurrentAccount)
                {
                    const b=element;
                    getTable.push(b);
                console.log(b);
                }
                
            })
           
        

    //    const a=(window.location.pathname);
    //    console.log(a);
    //    console.log(typeof(a));
    //    console.log(a.match(/(\d+)/));
       
       
        console.log(getCurrentAccount);
        
    };







   
   
        
    
    
    
   
    
 

    return (<>
        <table className="test">
            <caption className="formCaption">Account Table</caption>
            <tbody>
        <tr>
                <th className="th">Date</th>
            <th className="th">Membership No.</th>
            <th className="th"> Account No.</th>
            <th className="th">Transaction Type</th>
            <th className="th">Money Debit</th>
            <th className="th">Money Credit</th>
            <th className="th">Balance</th>
            <th className="th">Transaction ID</th>
            <th className="th">Late fine</th>
            <th className="th">Campany Bank Account No.</th>
            <th className="th">Branch Name</th>
            <th className="th">Particular</th>
                    
        </tr>
         
                 
                    {
                       
                         getTable.map(element=>
                        (
                          <tr>
                        <td className="td">{element.transactiondate}</td>
                        <td className="td">{element.membershipnumber}</td>
                        <td className="td">{element.accountnumber}</td>
                        <td className="td">{element.transactiontype}</td>
                        {element.transactiontype=="withdraw"?<td className="td">{element.amount}</td>:<td className="td">{0}</td>
                        
                        }
                        {
                            element.transactiontype=="deposit"?<td className="td">{element.amount}</td>:<td className="td">{0}</td>
                        }
                        
                        
                        <td className="td">{element.balance}</td>
                        <td className="td">{"abc"}</td>
                        <td className="td">{0}</td>
                        <td className="td">{element.companyaccount}</td>
                        <td className="td">{element.bankname}</td>
                        <td className="td">{element.particular}</td>
                        
                        

                          </tr>

                        ))
                    }
                
         
                
            </tbody>
        </table>
       
    </>)
}
export default Test;