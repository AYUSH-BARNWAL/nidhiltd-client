
import {useEffect} from "react"

const Withdraw =(props)=>{
    useEffect(()=>
    {
        props.setdata({...props.getdata,accounttype:"saving"})
    },[])
    
  
   return (
    <ul>
    {/* <tr>
        <td><label >Account Type</label></td>
        <td><select  className="box" name="accounttype" >
        <option >saving</option>
    </select></td>
    </tr> */}
   <li>
    <label className="la" >Account Type <span>*</span></label>
    <select className="box" name="accounttype">
        <option >saving</option>
    </select>
   </li>
    
    </ul>
    
 );
}
export default Withdraw;