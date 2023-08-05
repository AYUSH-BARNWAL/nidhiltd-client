import UpdateTransaction from "./components/customerTransactin/TransactionForm";
import CashBook from "./components/customerRecord/CashBook";
import BankBook from "./components/customerRecord/BankBook";
import Member from "./components/customerRecord/member";
import Promotor from "./components/customerRecord/promotors";
import Account from "./components/customerRecord/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/customerTransactin/test";
import AccOpeningForm from "./components/customerRecord/AccOpeningForm";
import Login from "./components/customerRecord/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/member" element={<Member />} />
        <Route path="/account" element={<Account />} />
        <Route path="/promotors" element={<Promotor />} />
        <Route path="/transaction" element={<UpdateTransaction />} />
        <Route path="/cashbook" element={<CashBook />} />
        <Route path="/bankbook" element={<BankBook />} />
        <Route path="/accopeningform" element={<AccOpeningForm />} />
        <Route path="/bankbook/:companyaccount" element={<Test />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
