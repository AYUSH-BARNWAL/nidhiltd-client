import { BrowserRouter,Route } from "react-router-dom";
import { getaccount } from "../../API/api";
import {useState,useEffect} from "react";
import {Dropdown} from "rsuite";
import Test from "../customerTransactin/test"

import { Link } from "react-router-dom";
const NavBar = ()=>
{
     function HandleChange(){
        console.log("HCCC");
     }
    const[getA,setA]=useState([]);
    useEffect(()=>{
       set();
    })
    const set=async()=>{
        console.log("option clicked");
        const account=await getaccount();
        
        
        setA(account.data);
    }
    const load=()=>
    {
        window.location.reload();
        return;
    }

    return (
        <div className="nav">
            <div className="head">Nidhi limited</div>
            
            <div><Link to="/" className="link">Member</Link></div>
            <div><Link to="/account" className="link">Account</Link></div>
            <div><Link to="promotors" className="link">Promotors</Link></div>
            <div><Link to="/transaction" className="link">Transaction </Link> </div>
            
            <div><Link to="/cashbook" className="link">Cash Book</Link></div>
            <div><Link to="/bankbook" className="link">Bank Book</Link> </div> 
            
            
            <Dropdown  title="Account Bank Book" id="h" name="accountno" >
               {getA.map(element=>(
                <>
                <Dropdown.Item onClick={()=>Test.set()} id="d" as={Link} to={"/bankbook/" +element.companyaccount}   >{element.companyaccount}</Dropdown.Item>
                </>
               ))}
            </Dropdown>

            

            

            {/* <select name="cashbook" id="bank"  title="bankbook">
                <option ><Link>Bank Book</Link></option>
                
                {getA.map((element)=>(
                    <>
                    <option  ><Link to="/bankbook/s">{element.companyaccount}</Link>
                        </option>
                        
                    </>
                ))}
               
                
               
                
            </select></Link> */}
            
            
        </div>
    );
}
export default NavBar;