
import './App.css';
import UpdateTransaction from "./components/customerTransactin/TransactionForm";
import CashBook from './components/customerRecord/CashBook';
import BankBook from './components/customerRecord/BankBook';
import NavbarWithCTAButton from './components/NavBar/NavBar';
import Member from "./components/customerRecord/member";
import Promotor from "./components/customerRecord/promotors";
import Account from "./components/customerRecord/Account";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Test from "./components/customerTransactin/test";

// import { useEffect, useState } from "react";



function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("https://bankserver-hao5.onrender.com")
  //     .then((res) => res.json())
  //     .then((res)=>console.log(res))
  //     .then((data) => setMessage(data))
  //     .then(console.log(message));
      
  // },[]);
 
  

  return (
    
    <BrowserRouter>
    
    <NavbarWithCTAButton/>
    <Routes>
    <Route path="/" element={<Member/>}/>
    <Route path="/account" element={<Account/>}/>
    <Route path="/promotors" element={<Promotor/>}/>
    <Route path="/transaction" element ={<UpdateTransaction/>}/>
    
    <Route path="/cashbook" element={<CashBook/> }/>
    <Route path="/bankbook" element={<BankBook/>}/>
    <Route path="/bankbook/:companyaccount" element={<Test/>}/>
    
    
    
    </Routes>
   
    </BrowserRouter>
    
    
    
    
  );
}

export default App;
