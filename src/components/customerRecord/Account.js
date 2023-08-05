/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { account } from "../../API/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NavbarWithCTAButton from "../NavBar/NavBar";

const Account = () => {
  const [getError, setError] = useState({});
  const [getAccount, setAccount] = useState({});
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const data = (e) => {
    setAccount({ ...getAccount, [e.target.name]: e.target.value });
  };

  // Function to handle bank name validation
  const handleBankNameError = (value) => {
    if (!value) {
      return "Please select a bank name";
    }
    return "";
  };

  // Function to handle account number validation
  const handleAccountNumberError = (value) => {
    const accountNumberPattern = /^[0-9]{9,18}$/;
    if (!value) {
      return "Account number is required!";
    } else if (!accountNumberPattern.test(value)) {
      return "Invalid account number";
    }
    return "";
  };

  // Function to handle IFSC code validation
  const handleIFSCError = (value) => {
    const ifscPattern = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!value) {
      return "IFSC code is required!";
    } else if (!ifscPattern.test(value)) {
      return "Invalid IFSC code";
    }
    return "";
  };

  const onSubmit = async () => {
    try {
      // Validate input fields
      const bankNameError = handleBankNameError(getAccount.bankname);
      const accountNumberError = handleAccountNumberError(
        getAccount.companyaccount
      );
      const ifscError = handleIFSCError(getAccount.IFSC);

      if (bankNameError || accountNumberError || ifscError) {
        setError({
          bankname: bankNameError,
          companyaccount: accountNumberError,
          IFSC: ifscError,
        });
        return;
      }

      await account(getAccount);
      window.location.reload();
    } catch (error) {
      console.error("Error while submitting:", error);
    }
  };

  const Line = () => {
    return <div className="w-11/12 mx-auto h-[1.5px] my-10 bg-gray-400" />;
  };

  return (
    <div>
      <NavbarWithCTAButton />
      <>
        <h1 className="flex text-5xl pt-28 mb-8 font-medium text-slate-800 ml-16">
          Account
        </h1>
        <Line />
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row w-11/12 mx-auto">
            <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
              Account
            </p>
            <div className="flex flex-col gap-10 w-full">
              {/* ... FormInput components ... */}
            </div>
          </div>

          <div className="flex gap-0 items-end self-end justify-end mr-44 mt-16">
            <input
              onClick={() => {}}
              type="button"
              value="CANCEL"
              className="justify-end cursor-pointer self-end items-end mr-12 tracking-wider text-gray-500 text-xl leading-loose font-bold"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="bg-red-600 cursor-pointer tracking-wider font-bold w-fit justify-end self-end items-end rounded-lg shadow-xl text-gray-50 px-6 py-1.5 text-xl"
            />
          </div>
        </form>
      </>
    </div>
  );
};

export default Account;
