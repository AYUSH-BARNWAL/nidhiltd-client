import React from "react";

const AccOpeningForm = () => {
  const Line = () => {
    return <div className="w-11/12 mx-auto h-[1.5px] my-10 bg-gray-400" />;
  };
  return (
    <>
      <h1 className="flex text-5xl pt-28 mb-8 font-medium text-slate-800 ml-16">
        New Bank Account Opening Form
      </h1>
      <Line />
      <form className="flex flex-col mb-16">
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
                  //onBlur={(e) => handleError(e)}
                  //onChange={(e) => data(e)}
                  onClick={() => {}}
                  type="text"
                  placeholder="Enter the bank name"
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  name="bankname"
                  required
                />
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  {" "}
                  Account Opening Date<span className="text-red-600">*</span>
                </label>
                <input
                  //onBlur={(e) => handleError(e)}
                  //onChange={(e) => data(e)}
                  onClick={() => {}}
                  type="date"
                  placeholder="Enter the bank name"
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  name="accountopeningdate"
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
                  //onBlur={(e) => handleError(e)}
                  //onChange={(e) => data(e)}
                  onClick={() => {}}
                  type="text"
                  placeholder="Enter the bank name"
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  name="accountnumber"
                  required
                />
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  {" "}
                  Account Type <span className="text-red-600">*</span>
                </label>
                <input
                  //onBlur={(e) => handleError(e)}
                  //onChange={(e) => data(e)}
                  onClick={() => {}}
                  type="text"
                  placeholder="Enter the bank name"
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  name="accounttype"
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
                  //onBlur={(e) => handleError(e)}
                  //onChange={(e) => data(e)}
                  onClick={() => {}}
                  type="text"
                  placeholder="Enter the bank name"
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  name="branch"
                  required
                />
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  {" "}
                  IFSC <span className="text-red-600">*</span>
                </label>
                <input
                  //onBlur={(e) => handleError(e)}
                  //onChange={(e) => data(e)}
                  onClick={() => {}}
                  type="text"
                  placeholder="Enter the bank name"
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  name="ifsc"
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
                  //onBlur={(e) => handleError(e)}
                  //onChange={(e) => data(e)}
                  onClick={() => {}}
                  type="text"
                  placeholder="Enter address"
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  name="address"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-0 items-end self-end justify-end mr-44 mt-16">
          <input
            onClick={() => {}}
            type="button"
            value="CANCEL"
            className=" justify-end cursor-pointer  self-end items-end mr-12 tracking-wider  text-gray-500 text-xl leading-loose font-bold"
          />
          <input
            onClick={() => {
              //Submit();
              window.location.reload();
            }}
            type="button"
            value="CREATE"
            className="bg-red-600 cursor-pointer tracking-wider font-bold w-fit justify-end self-end items-end rounded-lg shadow-xl text-gray-50 px-6 py-1.5 text-xl"
          />
        </div>
      </form>
    </>
  );
};

export default AccOpeningForm;
