import React from "react";
import NavbarWithCTAButton from "../NavBar/NavBar";
import { toast } from "react-toastify";
import { account } from "../../API/api";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";

const AccOpeningForm = () => {
  const [accFormData, setAccFormData] = useState({
    bankname: "",
    accountnumber: "",
    accountopeningdate: "",
    ifsc: "",
    branch: "",
    address: "",
    accounttype: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await account(accFormData);
      toast.success("Account Created Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const Line = () => {
    return <div className="w-11/12 mx-auto h-[1.5px] my-10 bg-gray-400" />;
  };

  return (
    <div>
      <NavbarWithCTAButton />
      <>
        <h1 className="flex text-5xl pt-28 mb-8 font-medium text-slate-800 ml-16">
          New Bank Account Opening Form
        </h1>
        <Line />
        <form className="flex flex-col mb-16" onSubmit={handleFormSubmit}>
          <div className="flex flex-row w-11/12 mx-auto">
            <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
              Details
            </p>
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    {" "}
                    Bank Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the bank name"
                    className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                    name="bankname"
                    value={accFormData.bankname}
                    required
                  />
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    {" "}
                    Account Opening Date<span className="text-red-600">*</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="date"
                    placeholder="Enter the bank name"
                    className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                    name="accountopeningdate"
                    value={accFormData.accountopeningdate}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    {" "}
                    Account Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the bank name"
                    className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                    name="accountnumber"
                    value={accFormData.accountnumber}
                    required
                  />
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    {" "}
                    Account Type <span className="text-red-600">*</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the bank name"
                    className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                    name="accounttype"
                    value={accFormData.accounttype}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    {" "}
                    Branch <span className="text-red-600">*</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the bank name"
                    className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                    name="branch"
                    value={accFormData.branch}
                    required
                  />
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    {" "}
                    IFSC <span className="text-red-600">*</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the bank name"
                    className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                    name="ifsc"
                    value={accFormData.ifsc}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-[61vw]">
                  <label className="font-bold text-lg text-gray-700">
                    {" "}
                    Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter address"
                    className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                    name="address"
                    value={accFormData.address}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 items-end self-end justify-end mr-44 mt-16">
            <input
              onClick={() => {
                window.history.back();
              }}
              type="button"
              value="CANCEL"
              className=" justify-end cursor-pointer  self-end items-end mr-12 tracking-wider  text-gray-500 text-xl leading-loose font-bold"
            />
            <button
              type="submit"
              className="bg-red-600 cursor-pointer tracking-wider font-bold w-fit justify-end self-end items-end rounded-lg shadow-xl text-gray-50 px-6 py-1.5 text-xl"
            >
              CREATE
            </button>
          </div>
        </form>
      </>
    </div>
  );
};

export default AccOpeningForm;
