import {
  addPersonal,
  addFinnacial,
  addCash,
  addChequeOnline,
  membership,
  getmembershipNo,
} from "../../API/api";
import { useState, useEffect } from "react";

const Member = () => {
  const [getpersonal, setpersonal] = useState({});
  const [getfinancial, setfinancial] = useState({});
  const [Nominee1, setdefault1] = useState(false);
  const [Nominee2, setdefault2] = useState(false);
  const [Nominee3, setdefault3] = useState(false);
  const [getpaymode, setpaymode] = useState({ payMode: "cash" });
  const [getmember, setmember] = useState({});
  const [getmem, setmem] = useState([]);
  const [getError, setError] = useState({});

  const personal = async () => {
    console.log("hii");
    let a = Object.assign(Nominee1, Nominee2);
    let b = Object.assign(a, Nominee3);
    let c = Object.assign(b, getpersonal);
    await addPersonal(c);
  };
  const finnacial = async () => {
    console.log(getfinancial);
    await addFinnacial(getfinancial);
  };

  const setp = (e) => {
    setpersonal({ ...getpersonal, [e.target.name]: e.target.value });
    console.log(getpersonal);
  };
  const setf = (e) => {
    setfinancial({ ...getfinancial, [e.target.name]: e.target.value });
    console.log(getfinancial);
  };
  useEffect(() => {}, []);
  const nominee1 = () => {
    if (Nominee1 == true) {
      setdefault1(false);
    } else {
      setdefault1(true);
    }
  };
  const nominee2 = () => {
    if (Nominee2 == true) {
      setdefault2(false);
    } else {
      setdefault2(true);
    }
  };
  const nominee3 = () => {
    if (Nominee3 == true) {
      setdefault3(false);
    } else {
      setdefault3(true);
    }
  };
  const pay = (e) => {
    setpaymode({ ...getpaymode, [e.target.name]: e.target.value });
    console.log(getpaymode);
  };
  const payment = async () => {
    let memnumber = { membershipnumber: memc[0].toString() };
    console.log("hello from payment");
    console.log(memnumber);
    let paymodenumber = Object.assign(memnumber, getpaymode);
    //let paymodenumber={...getpaymode,...memnumber};
    setpaymode(paymodenumber);
    console.log("hello from member payment");
    console.log(paymodenumber);

    if (getpaymode.payMode == "cash") {
      await addCash(paymodenumber);
    } else {
      await addChequeOnline(paymodenumber);
    }
    mem();
  };
  const setm = (e) => {
    setmember({ [e.target.name]: e.target.value });
  };
  const memb = async () => {
    console.log(getmember);
    await membership(getmember);
  };

  useEffect(() => {
    console.log("before reloading");
    mem();

    console.log("reloaded");
  }, []);

  const mem = async () => {
    let b = await getmembershipNo();
    setmem(b.data);
  };
  let memc = getmem.map((k) => k._id);
  console.log("hii");
  console.log(memc);
  console.log(memc[0]);

  const handleError = (e) => {
    if (e.target.name === "firstName" || e.target.name == "lastName") {
      let p = /[a-zA-Z]{2,10}/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: " name required" });
        console.log(getError.firstName);
        console.log("null value");
      } else if (e.target.value.length < 2 || e.target.value.length > 15) {
        setError({
          ...getError,
          [e.target.name]:
            "name should be of more than 2 and less than 15 characters",
        });
        console.log(getError.firstName);
        console.log("pattern");
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "date") {
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "please enter your DOB" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "father" || e.target.name == "mother") {
      let p = /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/;
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "name required" });
      } else if (!p.test(e.target.value)) {
        setError({
          ...getError,
          [e.target.name]:
            "name should be firstname and last name and name should be minimum 2 character",
        });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "email") {
      let p = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter email" });
      } else if (!p.test(e.target.value)) {
        setError({
          ...getError,
          [e.target.name]: "enter email in proper format",
        });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "phone") {
      let p = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter phone number" });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "enter valid mobile no." });
      }
    } else if (e.target.name == "aadhar") {
      let p = /^[1-9]{1}\d{3}\d{4}\d{4}$/;

      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter aadhaar no." });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "enter valid aadhar no." });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "pan") {
      let p = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter pan no." });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "enter valid pan no." });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "voter") {
      let p = /^([a-zA-Z]){3}([0-9]){7}?$/;
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter voter id" });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "enter valid voter id" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "ration") {
      let p = /^([a-zA-Z0-9]){8,12}\s*$/;
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter ration card no." });
      } else if (!p.test(e.target.value)) {
        setError({
          ...getError,
          [e.target.name]: "enter valid ration card no.",
        });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "areal") {
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter your area" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "post") {
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter post name" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "dist") {
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter your district" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "state") {
      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter your state" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name == "pincode") {
      let p = /^[1-9]{1}\d{2}\s?\d{3}$/gm;

      if (e.target.value == "") {
        setError({ ...getError, [e.target.name]: "enter your pin code" });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "invalid pin code" });
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
      <div className="text-5xl pt-28 mb-8 font-medium text-slate-800 ml-16">
        MEMBER DETAILS
      </div>
      <Line />
      <form className="flex flex-col gap-y-8">
        <div className="flex flex-row w-11/12 mx-auto">
          <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
            Personal Details
          </p>
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700 whitespace-nowrap">
                  Membership No. <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={memc}
                  name="membershipnumber"
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  disabled
                />
              </div>

              <div className="flex  w-2/5">
                <label className="font-bold text-lg whitespace-nowrap text-gray-700">
                  Title <span className="text-red-600">*</span>
                </label>

                <input
                  // onChange={(e) => data(e)}
                  defaultChecked
                  value="mr"
                  type="radio"
                  name="title"
                  className="translate-y-2 mx-1 ml-3 scale-90"
                  required
                />
                <label className="text-xl font-bold text-gray-700">Mr.</label>
                <input
                  // onChange={(e) => data(e)}
                  type="radio"
                  name="title"
                  className="translate-y-2 mx-1 ml-3 scale-90"
                  value="ms"
                  required
                />
                <label className="text-xl font-bold text-gray-700">Ms.</label>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  First Name <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  type="text"
                  name="firstName"
                  pattern="[a-zA-Z]{2}"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error text-red-600">{getError.name}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Middle Name
                </label>
                <input
                  onChange={(e) => setp(e)}
                  type="text"
                  name="middleName"
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error text-red-600">{getError.IFSC}</span>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Last Name <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onChange={(e) => setp(e)}
                  type="text"
                  name="lastName"
                  onBlur={(e) => handleError(e)}
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error text-red-600">{getError.IFSC}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  {" "}
                  Date of Birth <span className="text-red-600">*</span>
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  type="date"
                  name="date"
                  required
                  className="rounded-md bg-slate-300 text-gray-700 cursor-pointer font-semibold"
                />
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Father's Name <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$"
                  type="text"
                  name="father"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error text-red-600">{getError.father}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Mother's Name <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$"
                  type="text"
                  name="mother"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error text-red-600">{getError.mother}</span>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex  w-2/5">
                <label className="font-bold text-lg whitespace-nowrap text-gray-700">
                  Gender <span className="text-red-600">*</span>
                </label>

                <input
                  defaultChecked
                  onChange={(e) => setp(e)}
                  type="radio"
                  name="gender"
                  value="Male"
                  required
                  className="translate-y-2 mx-1 ml-3 scale-90"
                />
                <label className="text-xl font-bold text-gray-700">Male</label>
                <input
                  onChange={(e) => setp(e)}
                  type="radio"
                  name="gender"
                  value="Female"
                  required
                  className="translate-y-2 mx-1 ml-3 scale-90"
                />
                <label className="text-xl font-bold text-gray-700">
                  Female
                </label>
                <input
                  onChange={(e) => setp(e)}
                  type="radio"
                  name="gender"
                  value="Transgender"
                  required
                  className="translate-y-2 mx-1 ml-3 scale-90"
                />
                <label className="text-xl font-bold text-gray-700">Trans</label>
              </div>
              <div className="flex  w-2/5">
                <label className="font-bold text-lg whitespace-nowrap text-gray-700">
                  Marital Status <span className="text-red-600">*</span>
                </label>

                <input
                  onChange={(e) => setp(e)}
                  type="radio"
                  name="martial"
                  value="married"
                  className="translate-y-2 mx-1 ml-3 scale-90"
                />
                <label className="text-xl font-bold text-gray-700">
                  Married
                </label>
                <input
                  defaultChecked
                  onChange={(e) => setp(e)}
                  type="radio"
                  name="martial"
                  value="unmarried"
                  className="translate-y-2 mx-1 ml-3 scale-90"
                />
                <label className="text-xl font-bold text-gray-700">
                  Unmarried
                </label>
              </div>
            </div>
          </div>
        </div>
        <Line />
        <div className="flex flex-row w-11/12 mx-auto">
          <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
            Contact Details
          </p>
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Email <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  type="email"
                  name="email"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.email}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Mobile Number <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                  type="tel"
                  name="phone"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.phone}</span>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Aadhar Number <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setf(e)}
                  pattern="^[1-9]{1}\d{3}\d{4}\d{4}$"
                  type="number"
                  name="aadhar"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.aadhar}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  PAN Number <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setf(e)}
                  pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
                  type="number"
                  name="pan"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.pan}</span>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Voter ID Number <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setf(e)}
                  pattern="^([a-zA-Z]){3}([0-9]){7}?$"
                  type="text"
                  name="voter"
                  id=""
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.voter}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Ration Card Number <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setf(e)}
                  pattern="^([a-zA-Z0-9]){8,12}\s*$"
                  type="Number"
                  name="ration"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.ration}</span>
              </div>
            </div>
          </div>
        </div>
        <Line />
        <div className="flex flex-row w-11/12 mx-auto">
          <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
            Address
          </p>
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Area Locality <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  type="text"
                  name="areal"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.areal}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Landmark (if any){" "}
                </label>
                <input
                  onChange={(e) => setp(e)}
                  type="text"
                  name="Landmark"
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Post <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  type="text"
                  name="post"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.post}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  District <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  type="text"
                  name="dist"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.dist}</span>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  State <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  type="text"
                  name="state"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.state}</span>
              </div>
              <div className="flex flex-col w-2/5">
                <label className="font-bold text-lg text-gray-700">
                  Pin Code <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  onBlur={(e) => handleError(e)}
                  onChange={(e) => setp(e)}
                  pattern="^[1-9]{1}\d{2}\s?\d{3}$"
                  type="number"
                  name="pincode"
                  required
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                />
                <span className="error">{getError.pincode}</span>
              </div>
            </div>
          </div>
        </div>
        <Line />
        <div className="flex flex-row w-11/12 mx-auto">
          <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
            Nominee Details
          </p>
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-row gap-24">
              <div className="flex flex-col w-2/5">
                <input
                  onClick={() => nominee1()}
                  className="nominee text-xl font-bold text-gray-700"
                  type="button"
                  name="nominee1"
                  // value="Add Nominee1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-0 items-end self-end justify-end mr-44 mt-16">
          <input
            onClick={() => {
              //FIXME - Functionality
            }}
            type="button"
            value="CANCEL"
            className=" justify-end cursor-pointer  self-end items-end mr-12 tracking-wider  text-gray-500 text-xl leading-loose font-bold"
          />
          <input
            onClick={() => {
              //LINK - SUBMIT
              window.location.reload();
            }}
            type="button"
            value="SUBMIT"
            className="bg-red-600 cursor-pointer tracking-wider font-bold w-fit justify-end self-end items-end rounded-lg shadow-xl text-gray-50 px-6 py-1.5 text-xl"
          />
        </div>
      </form>
    </>
  );
};
export default Member;
