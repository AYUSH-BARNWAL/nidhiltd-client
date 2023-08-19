import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext"; // Adjust the path as per your project structure
import Login from "./components/customerRecord/Login";
import Member from "./components/customerRecord/member";
import Account from "./components/customerRecord/Account";
import Promotor from "./components/customerRecord/promotors";
import UpdateTransaction from "./components/customerTransactin/TransactionForm";
import CashBook from "./components/customerRecord/CashBook";
import BankBook from "./components/customerRecord/BankBook";
import AccOpeningForm from "./components/customerRecord/AccOpeningForm";
import Test from "./components/customerTransactin/test";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom Route Guard component
const AuthGuard = ({ element }) => {
  const { isAuthenticated } = useAuth();
  console.log("Kya authenticated hai??  ", isAuthenticated);

  if (!isAuthenticated) {
    console.log("Not authenticated on changing routes");
    // return <Navigate to="/" />;
  }

  return element;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Protected routes */}
          <Route path="/member" element={<AuthGuard element={<Member />} />} />
          <Route
            path="/account"
            element={<AuthGuard element={<Account />} />}
          />
          <Route
            path="/promotors"
            element={<AuthGuard element={<Promotor />} />}
          />
          <Route
            path="/transaction"
            element={<AuthGuard element={<UpdateTransaction />} />}
          />
          <Route
            path="/cashbook"
            element={<AuthGuard element={<CashBook />} />}
          />
          <Route
            path="/bankbook"
            element={<AuthGuard element={<BankBook />} />}
          />
          <Route
            path="/accopeningform"
            element={<AuthGuard element={<AccOpeningForm />} />}
          />
          <Route
            path="/bankbook/:companyaccount"
            element={<AuthGuard element={<Test />} />}
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
