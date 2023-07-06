"use client";
import { getaccount } from "../../API/api";
import { useState, useEffect } from "react";
// import {Dropdown} from "rsuite";
import Test from "../customerTransactin/test";
import { Dropdown, Navbar } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
const NavBar = () => {
  //  function HandleChange(){
  //     console.log("HCCC");
  //  }
  // const[getA,setA]=useState([]);
  // useEffect(()=>{
  //    set();
  // })
  // const set=async()=>{
  //     console.log("option clicked");
  //     const account=await getaccount();

  //     setA(account.data);
  // }
  // const load=()=>
  // {
  //     window.location.reload();
  //     return;
  // }

  return (
    // <div className="nav">
    //     <div className="head">Nidhi limited</div>

    //     <div><Link to="/" className="link">Member</Link></div>
    //     <div><Link to="/account" className="link">Account</Link></div>
    //     <div><Link to="promotors" className="link">Promotors</Link></div>
    //     <div><Link to="/transaction" className="link">Transaction </Link> </div>

    //     <div><Link to="/cashbook" className="link">Cash Book </Link></div>
    //     <div><Link to="/bankbook" className="link">Bank Book</Link> </div>

    //     <Dropdown  title="Account Bank Book" id="h" name="accountno" >
    //        {getA.map(element=>(
    //         <>
    //         <Dropdown.Item onClick={()=>Test.set()} id="d" as={Link} to={"/bankbook/" +element.companyaccount}   >{element.companyaccount}</Dropdown.Item>
    //         </>
    //        ))}
    //     </Dropdown>

    //     {/* <select name="cashbook" id="bank"  title="bankbook">
    //         <option ><Link>Bank Book</Link></option>

    //         {getA.map((element)=>(
    //             <>
    //             <option  ><Link to="/bankbook/s">{element.companyaccount}</Link>
    //                 </option>

    //             </>
    //         ))}
    //     </select></Link> */}
    // </div>
    <Navbar
      fluid
      rounded
      className="fixed top-0 justify-between mx-auto w-full shadow-2xl bg-red-600"
    >
      <Navbar.Brand href="#">
        <span className="self-center px-10 whitespace-nowrap text-lg font-semibold text-gray-50 dark:text-white">
          Nidhi Limited
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 stroke-gray-50 text-gray-50 px-10">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">User Name</span>
            <span className="block truncate text-sm font-medium">
              username@nidhilimited.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link active href="#">
          <p className="text-lg text-gray-600 font-bold">Home</p>
        </Navbar.Link> */}
        <Navbar.Link href="/">
          <p className="text-lg text-gray-50">Member</p>
        </Navbar.Link>
        <Navbar.Link href="/account">
          <p className="text-lg text-gray-50">Account</p>
        </Navbar.Link>
        <Navbar.Link href="/promotors">
          <p className="text-lg text-gray-50">Promoters</p>
        </Navbar.Link>
        <Navbar.Link href="/transaction">
          <p className="text-lg text-gray-50">Transaction</p>
        </Navbar.Link>
        <Navbar.Link href="/accopeningform">
          <p className="text-lg text-gray-50">New Account</p>
        </Navbar.Link>
        <Navbar.Link href="/cashbook">
          <p className="text-lg text-gray-50">Cash Book</p>
        </Navbar.Link>
        <Navbar.Link href="/bankbook">
          <p className="text-lg text-gray-50">Bank Book</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
