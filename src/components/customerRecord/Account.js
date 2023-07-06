import { account } from "../../API/api";
import { useState } from "react";
// import { Button } from "flowbite-react";

const Account = () => {
  const [getError, setError] = useState({});
  const [getAccount, setAccount] = useState({});

  const data = (e) => {
    setAccount({ ...getAccount, [e.target.name]: e.target.value });
    console.log(getAccount);
  };

  const Submit = async () => {
    console.log("clicked");
    await account(getAccount);
  };

  const handleError = (e) => {
    if (e.target.name === "bankname") {
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "Please select bank name" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "companyAccount") {
      let p = /^[0-9]{9,18}$/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "Acc. number required!" });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "invalid account number" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "IFSC") {
      let p = /^[A-Z]{4}0[A-Z0-9]{6}$/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "IFSC required!" });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "invalid IFSC code" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    }
  };

  const Line = () => {
    return <div className="w-11/12 mx-auto h-[1.5px] my-10 bg-gray-400" />;
  };

  return (
    <>
      <h1 className="flex text-5xl pt-28 mb-8 font-medium text-slate-800 ml-16">
        Account
      </h1>
      <Line />
      <form className="flex flex-col">
        <div className="flex flex-row w-11/12 mx-auto">
          <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
            Account
          </p>
          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  {" "}
                  Date <span className="text-red-600">*</span>
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => data(e)}
                  onClick={() => {}}
                  type="date"
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  name="accountopeningdate"
                  required
                />
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Bank Name <span className="text-red-600">*</span>{" "}
                </label>
                {/* <input onChange={(e)=>data(e)} type="text" name="bankname" required /> */}
                <select
                  name="bankname"
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => data(e)}
                  required
                  className="rounded-md bg-slate-300 text-gray-700 cursor-auto font-semibold"
                >
                  <option disabled selected value="">
                    Select Bank Name
                  </option>
                  <option value="state bank of india">SBI</option>
                  <option value="bank of india">BOI</option>
                  <option value="punjab bank of india">PNB</option>
                  <option value="HDFC bank">HDFC</option>
                </select>
                <span className="error text-red-600">{getError.bankname}</span>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Account No. <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={(e) => data(e)}
                  onBlur={(e) => handleError(e)}
                  type="String"
                  className="rounded-md bg-slate-300 h-[42px] text-gray-700 px-4 cursor-pointer font-semibold border border-gray-600"
                  pattern="^[0-9]{9,18}$"
                  required
                />
                <span className="error text-red-600">
                  {getError.companyaccount}
                </span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  IFSC Code <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onChange={(e) => data(e)}
                  onBlur={(e) => handleError(e)}
                  type="text"
                  name="IFSC "
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                  required
                  pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
                />
                <span className="error text-red-600">{getError.IFSC}</span>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex w-2/5 mr-10 ">
                <label className="!font-bold !text-lg text-gray-700 mr-7">
                  Account Active <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={(e) => data(e)}
                  defaultChecked
                  value="yes"
                  type="radio"
                  name="accountActive"
                  className="translate-y-2 mx-1 scale-90"
                  required
                />
                <label className="text-xl font-bold text-gray-700">Yes</label>
                <input
                  onChange={(e) => data(e)}
                  value="no"
                  type="radio"
                  name="accountActive"
                  className="translate-y-2 mx-1 ml-3 scale-90"
                  required
                />
                <label className="text-xl font-bold text-gray-700"> No</label>
              </div>
              <div className="flex  w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Use for printer <span className="text-red-600">*</span>
                </label>

                <input
                  onChange={(e) => data(e)}
                  defaultChecked
                  value="yes"
                  type="radio"
                  name="useforprinter"
                  className="translate-y-2 mx-1 ml-3 scale-90"
                  required
                />
                <label className="text-xl font-bold text-gray-700">Yes</label>
                <input
                  onChange={(e) => data(e)}
                  type="radio"
                  name="useforprinter"
                  className="translate-y-2 mx-1 ml-3 scale-90"
                  value="no"
                  required
                />
                <label className="text-xl font-bold text-gray-700">No</label>
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
              Submit();
              window.location.reload();
            }}
            type="button"
            value="SUBMIT"
            className="bg-red-600 cursor-pointer tracking-wider font-bold w-fit justify-end self-end items-end rounded-lg shadow-xl text-gray-50 px-6 py-1.5 text-xl"
          />
        </div>

        {/* <button onClick={()=>{Submit();window.location.reload()}} type="button"   className="btns" >submit</button> */}
      </form>
    </>
  );
};
export default Account;
