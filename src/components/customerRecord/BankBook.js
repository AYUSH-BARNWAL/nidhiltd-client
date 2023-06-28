import {getChequeOnline, getaccount} from "../../API/api.js";
import {useState,useEffect} from "react";
import { Dropdown } from "rsuite";
import { Link } from "react-router-dom";


const BankBook =()=>
{
    const [getcash,setcash]=useState([]);
    const [getA,setA]=useState([]);

    const allaccounts=async()=>{
        const res=await getaccount();
       // return res.data;
       setA(res.data);
    }

    useEffect(()=>{
        allaccounts();
        
        
        getAllCash().then(data=>{
            data.forEach(element=>{
                element.transactiondate=new Date(element.transactiondate).toLocaleDateString();
            });
            setcash(data);       
         });
        
        
    },[]);

    const getAllCash=async()=>
    {
        let response=await getChequeOnline();
      
        
        return response.data;
        //setcash(response.data);s
        
    }
    return (
          <>
            
            


        <table className="table">
       
        <caption className="caption">BankBook
      
        </caption>
        <thead>
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
        </thead>
        <tbody>
        {
            getcash.map(paisa=>(
                
            <>
                {
                    paisa.membershipamount==0?
                    <tr>
                        <td className="td">{paisa.transactiondate}</td>
                        <td className="td">{paisa.membershipnumber}</td>
                        <td className="td">{paisa.accountnumber}</td>
                        <td className="td">{paisa.transactiontype}</td>
                        <td className="td">{paisa.transactiontype=="withdraw"?paisa.amount:0}</td>
                        <td className="td">{paisa.transactiontype=="deposit"?paisa.amount:0}</td>
                        <td className="td">{paisa.balance}</td>
                        <td className="td">{0}</td>
                        <td className="td">{0}</td>
                        <td className="td">{paisa.companyaccount}</td>
                        <td className="td">{paisa.bankname}</td>
                        <td className="td">{paisa.particular}</td>
                    </tr>
                    :
                    <>
                    <tr>
                        <td className="td">{paisa.transactiondate}</td>
                        <td className="td">{paisa.membershipnumber}</td>
                        <td className="td">{paisa.accountnumber}</td>
                        <td className="td">{"membership charge"}</td>
                        <td className="td">{0}</td>
                        <td className="td">{paisa.membershipamount}</td>
                        <td className="td">{paisa.balance}</td>
                        <td className="td">{0}</td>
                        <td className="td">{0}</td>
                        <td className="td">{paisa.companyaccount}</td>
                        <td className="td">{paisa.bankname}</td>
                        <td className="td">{"membership charge"}</td>
                    </tr>
                    <tr>
                    <td className="td">{paisa.transactiondate}</td>
                        <td className="td">{paisa.membershipnumber}</td>
                        <td className="td">{paisa.accountnumber}</td>
                        <td className="td">{"share amount"}</td>
                        <td className="td">{0}</td>
                        <td className="td">{paisa.shareamount}</td>
                        <td className="td">{paisa.balance}</td> 
                        <td className="td">{0}</td>
                        <td className="td">{0}</td>
                        <td className="td">{paisa.companyaccount}</td>
                        <td className="td">{paisa.bankname}</td>
                        <td className="td">{"share amount"}</td>
                    </tr>
                    </>
                }
            </>
            
            ))
            
        }
            
            
        
        </tbody>
        
    </table>
    </>
    );
}
export default BankBook;