/* eslint-disable no-useless-escape */
import {
  addPersonal,
  getaccount,
  addCash,
  addChequeOnline,
  membership,
  getmembershipNo,
} from "../../API/api";
import { useState, useEffect } from "react";
import NavbarWithCTAButton from "../NavBar/NavBar";
import { toast } from "react-toastify";

const Member = () => {
  const [Nominee1, setdefault1] = useState(false);
  const [Nominee2, setdefault2] = useState(false);
  const [Nominee3, setdefault3] = useState(false);
  const [getpaymode, setpaymode] = useState({ payMode: "cash" });
  const [getError, setError] = useState({});
  const [banks, setBanks] = useState([]);

  const [personal, setPersonal] = useState({
    membershipnumber: "",
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birth: "",
    father: "",
    mother: "",
    gender: "",
    martial: "",
    spouse: "",
    email: "",
    phone: "",
    aadhar: "",
    pan: "",
    voter: "",
    ration: "",
    area: "",
    landmark: "",
    post: "",
    dist: "",
    state: "",
    pin: "",

    name1: "",
    aadhar1: "",
    email1: "",
    pan1: "",
    phone1: "",
    relation1: "",
    voter1: "",
    ration1: "",

    name2: "",
    aadhar2: "",
    email2: "",
    pan2: "",
    phone2: "",
    relation2: "",
    voter2: "",
    ration2: "",

    name3: "",
    aadhar3: "",
    email3: "",
    pan3: "",
    phone3: "",
    relation3: "",
    voter3: "",
    ration3: "",
  });

  const [payment, setPayment] = useState({
    membershipnumber: "",
    selectedBank: "",
    sharePurchaseAmount: "10",
    membershipCharge: "25",
    promotor: "",
    numberOfShares: "",
    payMode: "cash",
    BankName: "",
    total: "",
  });

  const [cash, setCash] = useState({
    accountnumber: "",
    amount: "",
    transactiondate: Date.now(),
    shareamount: null,
    membershipamount: "",
    membershipnumber: "",
  });

  const [chequeOnline, setChequeOnline] = useState({
    accountnumber: "",
    amount: "",
    transactiondate: "",
    paymode: "",
    particular: "",
    balance: "0",
    shareamount: "",
    membershipamount: "",
    membershipnumber: "",
    member: "",
  });

  useEffect(() => {
    getaccount()
      .then((res) => {
        // console.log("Bank data fetched:", res);
        setBanks(res);
      })
      .catch((err) => {
        console.log("Error fetching banks:", err);
      });
  }, []);

  const nominee1 = () => {
    if (Nominee1 === true) {
      setdefault1(false);
    } else {
      setdefault1(true);
    }
  };
  const nominee2 = () => {
    if (Nominee2 === true) {
      setdefault2(false);
    } else {
      setdefault2(true);
    }
  };
  const nominee3 = () => {
    if (Nominee3 === true) {
      setdefault3(false);
    } else {
      setdefault3(true);
    }
  };

  const handleError = (e) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      let p = /[a-zA-Z]{2,10}/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: " name //required" });
        console.log(getError.firstName);
        console.log("null value");
      } else if (!p.test(e.target.value)) {
        setError({
          ...getError,
          [e.target.name]:
            "name should be of more than 2 and less than 10 characters",
        });
        console.log(getError.firstName);
        console.log("pattern");
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "date") {
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "please enter your DOB" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "father" || e.target.name === "mother") {
      let p = /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "name //required" });
      } else if (!p.test(e.target.value)) {
        setError({
          ...getError,
          [e.target.name]:
            "name should be firstname and last name and name should be minimum 2 character",
        });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "email") {
      let p = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter email" });
      } else if (!p.test(e.target.value)) {
        setError({
          ...getError,
          [e.target.name]: "enter email in proper format",
        });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "phone") {
      let p = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter phone number" });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "enter valid mobile no." });
      }
    } else if (e.target.name === "aadhar") {
      let p = /^[1-9]{1}\d{3}\d{4}\d{4}$/;

      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter aadhaar no." });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "enter valid aadhar no." });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "pan") {
      let p = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter pan no." });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "enter valid pan no." });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "voter") {
      let p = /^([a-zA-Z]){3}([0-9]){7}?$/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter voter id" });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "enter valid voter id" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "ration") {
      let p = /^([a-zA-Z0-9]){8,12}\s*$/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter ration card no." });
      } else if (!p.test(e.target.value)) {
        setError({
          ...getError,
          [e.target.name]: "enter valid ration card no.",
        });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "areal") {
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter your area" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "post") {
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter post name" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "dist") {
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter your district" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "state") {
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter your state" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (e.target.name === "pincode") {
      let p = /^[1-9]{1}\d{2}\s?\d{3}$/gm;

      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "enter your pin code" });
      } else if (!p.test(e.target.value)) {
        setError({ ...getError, [e.target.name]: "invalid pin code" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addPersonal(personal);
      await membership(payment);
      if (payment.payMode === "cash") {
        await addCash(cash);
      } else {
        await addChequeOnline(cash);
      }
      toast.success("Account Created Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonal((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePayChange = async (e) => {
    const { name, value } = e.target;
    setPayment((prevData) => ({ ...prevData, [name]: value }));
    if (name === "payMode") setpaymode({ payMode: value });
  };
  const handleCashChange = async (e) => {
    const { name, value } = e.target;
    setCash((prevData) => ({ ...prevData, [name]: value }));
  };
  // useEffect(() => {
  //   console.log(payment);
  // }, [payment]);
  // useEffect(() => {
  //   console.log(personal);
  // }, [personal]);
  // useEffect(() => {
  //   console.log(getpaymode);
  // }, [getpaymode]);
  // useEffect(() => {
  //   console.log(cash);
  // }, [cash]);

  const [membershipNumber, setMembershipNumber] = useState("");

  useEffect(() => {
    async function fetchData() {
      const memNo = await getmembershipNo();
      if (memNo) setMembershipNumber(memNo.membershipnumber);
      else setMembershipNumber(0);
      console.log(membershipNumber);
    }

    fetchData();
  }, []);

  const Line = () => {
    return <div className="w-11/12 mx-auto h-[1.5px] my-10 bg-gray-400" />;
  };

  return (
    <div>
      <NavbarWithCTAButton />

      <>
        <div className="text-5xl pt-28 mb-8 font-medium text-slate-800 ml-16">
          MEMBER DETAILS
        </div>
        <Line />
        <form className="flex flex-col gap-y-8" onSubmit={submitHandler}>
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
                    value={
                      (personal.membershipnumber =
                        payment.membershipnumber =
                        cash.membershipnumber =
                        chequeOnline.membershipnumber =
                          membershipNumber + 1)
                    }
                    name="membershipnumber"
                    disabled
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                </div>

                <div className="flex  w-2/5">
                  <label
                    className="font-bold text-lg whitespace-nowrap text-gray-700"
                    value={personal.title}
                    onChange={handleInputChange}
                  >
                    Title <span className="text-red-600">*</span>
                  </label>

                  <input
                    onChange={handleInputChange}
                    value="mr"
                    type="radio"
                    name="title"
                    className="translate-y-2 mx-1 ml-3 scale-90"
                    ////required
                  />
                  <label className="text-xl font-bold text-gray-700">Mr.</label>
                  <input
                    onChange={handleInputChange}
                    type="radio"
                    name="title"
                    className="translate-y-2 mx-1 ml-3 scale-90"
                    value="ms"
                    //required
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    type="text"
                    name="firstName"
                    // pattern="[a-zA-Z]{2}"
                    //required
                    value={personal.firstName}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error text-red-600">{getError.name}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Middle Name
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="middleName"
                    value={personal.middleName}
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
                    onChange={handleInputChange}
                    type="text"
                    name="lastName"
                    value={personal.lastName}
                    //onBlur={(e) => handleError(e)}
                    //required
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    type="date"
                    name="birth"
                    //required
                    value={personal.birth}
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    // pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$"
                    type="text"
                    name="father"
                    //required
                    value={personal.father}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error text-red-600">{getError.father}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Mother's Name <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    // pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$"
                    type="text"
                    name="mother"
                    //required
                    value={personal.mother}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error text-red-600">{getError.mother}</span>
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex  w-2/5">
                  <label
                    className="font-bold text-lg whitespace-nowrap text-gray-700"
                    value={personal.gender}
                    onChange={handleInputChange}
                  >
                    Gender <span className="text-red-600">*</span>
                  </label>

                  <input
                    onChange={handleInputChange}
                    type="radio"
                    name="gender"
                    value="Male"
                    //required
                    className="translate-y-2 mx-1 ml-3 scale-90"
                  />
                  <label className="text-xl font-bold text-gray-700">
                    Male
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="radio"
                    name="gender"
                    value="Female"
                    //required
                    className="translate-y-2 mx-1 ml-3 scale-90"
                  />
                  <label className="text-xl font-bold text-gray-700">
                    Female
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="radio"
                    name="gender"
                    value="Transgender"
                    //required
                    className="translate-y-2 mx-1 ml-3 scale-90"
                  />
                  <label className="text-xl font-bold text-gray-700">
                    Trans
                  </label>
                </div>
                <div className="flex  w-2/5">
                  <label
                    className="font-bold text-lg whitespace-nowrap text-gray-700"
                    value={personal.martial}
                    onChange={handleInputChange}
                  >
                    Marital Status <span className="text-red-600">*</span>
                  </label>

                  <input
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
              {personal.martial === "married" ? (
                <>
                  <div className="font-bold text-lg text-gray-700">
                    Spouse Name
                  </div>
                  <div className="">
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="spouse"
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    //required
                    value={personal.email}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error">{getError.email}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Mobile Number <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    // pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    type="tel"
                    name="phone"
                    //required
                    value={personal.phone}
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    // pattern="^[1-9]{1}\d{3}\d{4}\d{4}$"
                    type="number"
                    name="aadhar"
                    //required
                    value={personal.aadhar}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error">{getError.aadhar}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    PAN Number <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    // pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
                    type="text"
                    name="pan"
                    //required
                    value={personal.pan}
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    // pattern="^([a-zA-Z]){3}([0-9]){7}?$"
                    type="text"
                    name="voter"
                    id=""
                    //required
                    value={personal.voter}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error">{getError.voter}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Ration Card Number <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    pattern="^([a-zA-Z0-9]){8,12}\s*$"
                    type="Number"
                    name="ration"
                    //required
                    value={personal.ration}
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    type="text"
                    name="area"
                    //required
                    value={personal.area}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error">{getError.areal}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Landmark (if any){" "}
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="landmark"
                    value={personal.landmark}
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    type="text"
                    name="post"
                    //required
                    value={personal.post}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error">{getError.post}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    District <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    type="text"
                    name="dist"
                    //required
                    value={personal.dist}
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
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    type="text"
                    name="state"
                    //required
                    value={personal.state}
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  <span className="error">{getError.state}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Pin Code <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handleInputChange}
                    // pattern="^[1-9]{1}\d{2}\s?\d{3}$"
                    type="text"
                    name="pincode"
                    //required
                    value={personal.pincode}
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
              <div className="w-[89%]">
                <input
                  onClick={() => nominee1()}
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold py-2.5 border border-black"
                  type="button"
                  name="nominee1"
                  value="Add Nominee 1"
                />
              </div>

              {Nominee1 === true ? (
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-row gap-24">
                    <div className="flex flex-col w-2/5">
                      <label className="font-bold text-lg text-gray-700">
                        Name:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="name1"
                        value={personal.name1}
                        placeholder="Enter Name for Nominee 1"
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                      />
                    </div>
                    <div className="flex flex-col w-2/5">
                      <label className="font-bold text-lg text-gray-700">
                        Relation:
                      </label>
                      <input
                        onChange={handleInputChange}
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        type="text"
                        value={personal.relation1}
                        name="relation1"
                        placeholder="Enter Relation"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-24">
                    <div className="flex flex-col w-2/5">
                      <label className="font-bold text-lg text-gray-700">
                        Email
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="email"
                        name="email1"
                        value={personal.email1}
                        placeholder="Enter Email of Nominee 1"
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                      />
                    </div>
                    <div className="flex flex-col w-2/5">
                      <label className="font-bold text-lg text-gray-700">
                        Mobile Number
                      </label>
                      <input
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        onChange={handleInputChange}
                        type="tel"
                        name="phone1"
                        value={personal.phone1}
                        placeholder="Enter Mobile Number of Nominee 1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-24">
                    <div className="flex flex-col w-2/5">
                      <label className="font-bold text-lg text-gray-700">
                        Aadhar Number
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        name="aadhar1"
                        value={personal.aadhar1}
                        placeholder="Enter Aadhar Number of Nominee 1"
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                      />
                    </div>
                    <div className="flex flex-col w-2/5">
                      <label className="font-bold text-lg text-gray-700">
                        Pan Number
                      </label>
                      <input
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        onChange={handleInputChange}
                        type="text"
                        name="pan1"
                        value={personal.pan1}
                        placeholder="Enter Pan Number of Nominee 1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-24">
                    <div className="flex flex-col w-2/5">
                      <label className="font-bold text-lg text-gray-700">
                        Ration Card Number
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        value={personal.ration1}
                        name="ration1"
                        placeholder="Enter Ration Card Number of Nominee 1"
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                      />
                    </div>
                    <div className="flex flex-col w-2/5">
                      <label className="font-bold text-lg text-gray-700">
                        Voter ID
                      </label>
                      <input
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        onChange={handleInputChange}
                        type="text"
                        name="voter1"
                        value={personal.voter1}
                        placeholder="Enter Voter ID of Nominee 1"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="w-[89%]">
                <input
                  onClick={() => nominee2()}
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold py-2.5 border border-black"
                  type="button"
                  name="nominee2"
                  value="Add Nominee 2"
                />

                {Nominee1 === true && Nominee2 === true ? (
                  <div className="flex flex-col gap-y-2">
                    <div className="flex flex-row gap-24">
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Name
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="name2"
                          placeholder="Enter Name for Nominee 2"
                          value={personal.name2}
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        />
                      </div>
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Relation
                        </label>
                        <input
                          onChange={handleInputChange}
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                          type="text"
                          name="relation2"
                          value={personal.relation2}
                          placeholder="Enter Relation"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-24">
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Email
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="email"
                          name="email2"
                          value={personal.email2}
                          placeholder="Enter Email of Nominee 2"
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        />
                      </div>
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Mobile Number
                        </label>
                        <input
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                          onChange={handleInputChange}
                          type="tel"
                          name="phone2"
                          value={personal.phone2}
                          placeholder="Enter Mobile Number of Nominee 2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-24">
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Aadhar Number
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="number"
                          name="aadhar2"
                          value={personal.aadhar2}
                          placeholder="Enter Aadhar Number of Nominee 2"
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        />
                      </div>
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Pan Number
                        </label>
                        <input
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                          onChange={handleInputChange}
                          type="text"
                          name="pan2"
                          value={personal.pan2}
                          placeholder="Enter Pan Number of Nominee 2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-24">
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Ration Card Number
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="ration2"
                          value={personal.ration2}
                          placeholder="Enter Ration Card Number of Nominee 2"
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        />
                      </div>
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Voter ID
                        </label>
                        <input
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                          onChange={handleInputChange}
                          type="text"
                          name="voter2"
                          value={personal.voter2}
                          placeholder="Enter Voter ID of Nominee 2"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="w-[89%]">
                <input
                  onClick={() => nominee3()}
                  className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold py-2.5 border border-black"
                  type="button"
                  name="nominee3"
                  value="Add Nominee 3"
                />

                {Nominee1 === true && Nominee2 === true && Nominee3 === true ? (
                  <div className="flex flex-col gap-y-2">
                    <div className="flex flex-row gap-24">
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Name
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="name3"
                          value={personal.name3}
                          placeholder="Enter Name for Nominee 3"
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        />
                      </div>
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Relation
                        </label>
                        <input
                          onChange={handleInputChange}
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                          type="text"
                          name="relation3"
                          value={personal.relation3}
                          placeholder="Enter Relation"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-24">
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Email
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="email"
                          name="email3"
                          value={personal.email3}
                          placeholder="Enter Email of Nominee 3"
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        />
                      </div>
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Mobile Number
                        </label>
                        <input
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                          onChange={handleInputChange}
                          type="tel"
                          name="phone3"
                          value={personal.phone3}
                          placeholder="Enter Mobile Number of Nominee 3"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-24">
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Aadhar Number
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="number"
                          name="aadhar3"
                          value={personal.aadhar3}
                          placeholder="Enter Aadhar Number of Nominee 3"
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        />
                      </div>
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Pan Number
                        </label>
                        <input
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                          onChange={handleInputChange}
                          type="text"
                          name="pan3"
                          value={personal.pan3}
                          placeholder="Enter Pan Number of Nominee 3"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-24">
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Ration Card Number
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="ration3"
                          value={personal.ration3}
                          placeholder="Enter Ration Card Number of Nominee 3"
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        />
                      </div>
                      <div className="flex flex-col w-2/5">
                        <label className="font-bold text-lg text-gray-700">
                          Voter ID
                        </label>
                        <input
                          className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                          onChange={handleInputChange}
                          type="text"
                          name="voter3"
                          value={personal.voter3}
                          placeholder="Enter Voter ID of Nominee 3"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Repeat similar structure for nominee2 and nominee3 */}
            </div>
          </div>
          <Line />
          <div className="flex flex-row w-11/12 mx-auto">
            <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
              Membership Details
            </p>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Share Purchase Amount{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handlePayChange}
                    type="text"
                    name="sharePurchaseAmount"
                    //required
                    value={payment.sharePurchaseAmount}
                    placeholder="Enter Share Purchase Amount"
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  {/* <span className="error">{getError.areal}</span> */}
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Number of Shares <span className="text-red-600">*</span>
                  </label>
                  <input
                    onChange={handlePayChange}
                    type="text"
                    name="numberOfShares"
                    value={payment.numberOfShares}
                    placeholder="Enter Number of Shares"
                    //required
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Membership Charge <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handlePayChange}
                    type="text"
                    name="membershipCharge"
                    //required
                    value={payment.membershipCharge}
                    placeholder="Enter Membership Charge"
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  {/* <span className="error">{getError.post}</span> */}
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Promotor <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={handlePayChange}
                    type="text"
                    name="promotor"
                    //required
                    value={payment.promotor}
                    placeholder="Enter Promotor Name"
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  {/* <span className="error">{getError.dist}</span> */}
                </div>
              </div>

              <div className="flex flex-col gap-y-4 w-full">
                <div className="flex flex-row gap-24">
                  <div className="flex flex-col w-2/5">
                    <label className="font-bold text-lg text-gray-700">
                      Pay Mode <span className="text-red-600">*</span>
                    </label>
                    <div className="flex items-center gap-1">
                      <input
                        onChange={handlePayChange}
                        type="radio"
                        name="payMode"
                        value="cash"
                        defaultChecked
                      />
                      <span className="mr-3">Cash</span>
                      <input
                        onChange={handlePayChange}
                        type="radio"
                        name="payMode"
                        value="cheque"
                      />
                      <span className="mr-3">Cheque</span>
                      <input
                        onChange={handlePayChange}
                        type="radio"
                        name="payMode"
                        value="onlineTransaction"
                      />
                      <span>Online</span>
                    </div>
                  </div>

                  {getpaymode.payMode === "cash" ||
                  getpaymode.payMode === "cheque" ? (
                    <></>
                  ) : (
                    <div className="mt-4">
                      <label className="font-bold text-lg text-gray-700">
                        Bank Name
                      </label>
                      <select
                        onChange={handlePayChange}
                        name="selectedBank"
                        value={payment.selectedBank}
                        className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                      >
                        <option value="" disabled>
                          Select a bank
                        </option>
                        {banks.map((bank) => (
                          <option key={bank._id} value={bank.bankname}>
                            {bank.bankname}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="font-bold text-lg text-gray-700">
                    Total Amount Payable <span className="text-red-600">*</span>
                  </label>
                  <input
                    //onBlur={(e) => handleError(e)}
                    onChange={(e) => {
                      handlePayChange(e);
                      handleCashChange(e);
                    }}
                    type="text"
                    name="total"
                    //required
                    value={
                      (payment.total =
                        cash.amount =
                        chequeOnline.amount =
                          parseInt(
                            payment.sharePurchaseAmount * payment.numberOfShares
                          ) + parseInt(payment.membershipCharge))
                    }
                    placeholder="Enter Share Purchase Amount"
                    className="rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                  />
                  {/* <span className="error">{getError.areal}</span> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-0 items-end self-end justify-end mb-20 mr-44 mt-16">
            <input
              onClick={() => {
                window.location.reload();
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
export default Member;
