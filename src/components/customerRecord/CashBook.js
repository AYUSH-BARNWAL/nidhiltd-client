import { getCash } from '../../API/api.js'
import { useEffect, useState } from 'react'
const CashBook = () => {
  const [getpaisa, setpaisa] = useState([])
  useEffect(() => {
    getallpaisa().then(data=>{
      data.forEach(element => {
        // console.log(new Date(element.transactiondate).toLocaleDateString());
     element.transactiondate=new Date(element.transactiondate).toLocaleDateString();
   });
      setpaisa(data);
    })
  }, [])
  const getallpaisa = async () => {
    let response = await getCash();
    //response.data.forEach(element => {
   //   element.transactiondate=element.transactiondate.toLocaleDateString();
   // });
    //setpaisa(response.data)
    return response.data;
  }
  return (
    <table className="table">
      <caption className="caption">CashBook</caption>
      <thead>
        <tr>
          <th className="th">Date</th>
          <th className="th">Membership No.</th>
          <th className="th">Account No.</th>
          <th className="th">Transaction Type</th>
          <th className="th">Money Debit</th>
          <th className="th">Money Credit</th>
          <th className="th">Balance</th>
          <th className="th">Particular</th>
          
          <th className="th">Late fine</th>
        </tr>
      </thead>
      <tbody>
     {
       getpaisa.map((paisa)=>(
        
        
       <>
       {
        paisa.membershipamount=="0"?
        <tr>
          <td className='td'>{paisa.transactiondate}</td>
          <td className='td'>{paisa.membershipnumber}</td>
          <td className='td'>{paisa.accountnumber}</td>
          <td className='td'>{paisa.transactiontype}</td>
          <td className='td'>{paisa.transactiontype=="withdraw"?paisa.amount:0}</td>
          <td className='td'>{paisa.transactiontype=="deposit"?paisa.amount:0}</td>
          <td className='td'>{paisa.balance}</td>
          <td className='td'>{paisa.particular}</td>
          <td className='td'>{0}</td>

        </tr>
        : <>
        <tr>
        <td className='td'>{paisa.transactiondate}</td>
          <td className='td'>{paisa.membershipnumber}</td>
          <td className='td'>{paisa.accountnumber}</td>
          <td className='td'>{"membership charge"}</td>
          <td className='td'>{0}</td>
          <td className='td'>{paisa.membershipamount}</td>
          <td className='td'>{paisa.balance}</td>
          <td className='td'>{"membership charge"}</td>
          <td className='td'>{0}</td>
        </tr>
        <tr>
        <td className='td'>{paisa.transactiondate}</td>
          <td className='td'>{paisa.membershipnumber}</td>
          <td className='td'>{paisa.accountnumber}</td>
          <td className='td'>{"share amount"}</td>
          <td className='td'>{0}</td>
          <td className='td'>{paisa.shareamount}</td>
          <td className='td'>{paisa.balance}</td>
          <td className='td'>{"share amount"}</td>
          <td className='td'>{0}</td>
        </tr>
          
          </>
        
       }


      

        
        
        </>
     ))
     
      
     }
        
      
      
        
      </tbody>
    </table>
  )
}
export default CashBook
