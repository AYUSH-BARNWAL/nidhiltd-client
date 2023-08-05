import { useState } from "react";
import NavbarWithCTAButton from "../NavBar/NavBar";
import { addpromotors } from "../../API/api";

const Motor = () => {
  const [getpro, setpro] = useState({});
  const [getError, setError] = useState({});
  const promotors = (e) => {
    console.log(e.target.value);
    setpro({ ...getpro, [e.target.name]: e.target.value });
  };

  const submit = () => {
    console.log(getpro);
    addpromotors(getpro);
  };

  const handleError = (e) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      let p = /[a-zA-Z]{2,10}/;
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: " name required" });
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
    } else if (e.target.name === "DOB") {
      if (e.target.value === "") {
        setError({ ...getError, [e.target.name]: "please enter your DOB" });
      } else {
        setError({ ...getError, [e.target.name]: "" });
      }
    } else if (
      e.target.name === "fatherName" ||
      e.target.name === "motherName"
    ) {
      let p = /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/;
      if (e.target.value === "") {
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
    } else if (e.target.name === "number") {
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

  const Line = () => {
    return <div className="w-11/12 mx-auto h-[1.5px] my-10 bg-gray-400" />;
  };

  return (
    <div>
      <NavbarWithCTAButton />
      <>
        <h1 className="flex text-5xl pt-28 mb-8 font-medium text-slate-800 ml-16">
          Promotor
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
                  <label
                    id="firstnames"
                    className="laa font-bold text-lg text-gray-700"
                  >
                    {" "}
                    First Name<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="firstName"
                    required
                    pattern="[a-zA-Z]{2}"
                  />
                  <span className="error">{getError.firstName}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="laa font-bold text-lg text-gray-700">
                    Middle Name:
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="middleName"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="lastnames"
                  >
                    Last Name<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="lastName"
                    required
                  />
                  <span className="error">{getError.lastName}</span>
                </div>
                <div>
                  <label
                    id="genders"
                    className="font-bold text-lg text-gray-700"
                  >
                    Gender<span>*</span>
                  </label>
                  <div className="flex flex-row gap-x-2">
                    <input
                      defaultChecked
                      className="pro"
                      onChange={(e) => promotors(e)}
                      type="radio"
                      name="gender"
                      value="male"
                      required
                    />

                    <label className="ra">M</label>
                    <input
                      className="pro"
                      onChange={(e) => promotors(e)}
                      type="radio"
                      name="gender"
                      value="female"
                      required
                    />

                    <label className="ra">F</label>
                    <input
                      className="pro"
                      onChange={(e) => promotors(e)}
                      type="radio"
                      name="gender"
                      value="trans"
                      required
                    />
                    <label className="ra">T</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="dobs"
                  >
                    Date of Birth<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="date"
                    name="DOB"
                    required
                  />
                  <span className="error">{getError.DOB}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label
                    id="martials"
                    className="font-bold text-lg text-gray-700"
                  >
                    Marital status<span>*</span>
                  </label>
                  <div className="flex flex-row gap-2">
                    <input
                      className="pro"
                      onChange={(e) => promotors(e)}
                      type="radio"
                      name="martialstatus"
                      value="married"
                      required
                    />
                    <label>married</label>
                    <input
                      className="pro"
                      onChange={(e) => promotors(e)}
                      type="radio"
                      name="martialstatus"
                      value="unmarried"
                      required
                    />
                    <label>unmarried</label>
                  </div>

                  {getpro.martialstatus === "married" ? (
                    <>
                      <label className=" font-bold text-lg text-gray-700">
                        Spouse Name<span>*</span>
                      </label>
                      <input
                        className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                        onChange={(e) => promotors(e)}
                        type="text"
                        name="spouse"
                        required
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="fathernames"
                  >
                    Father Name<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="fatherName"
                    required
                    pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$"
                  />
                  <span className="error">{getError.fatherName}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="mothernames"
                  >
                    Mother Name<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="motherName"
                    pattern="^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$"
                    required
                  />
                  <span className="error">{getError.motherName}</span>
                </div>
              </div>
            </div>
          </div>
          <Line />
          <div className="flex flex-row w-11/12 mx-auto">
            <p className="text-xl font-bold text-gray-900 w-1/3 text-left">
              Contact Details
            </p>
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="emails"
                  >
                    email<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="email"
                    name="email"
                    required
                  />
                  <span className="error">{getError.email}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="mobiles"
                  >
                    Mobile<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="number"
                    name="number"
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    required
                  />
                  <span className="error">{getError.number}</span>
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="aadhars"
                  >
                    Aadhar NO.<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="number"
                    name="aadhar"
                    pattern="^[1-9]{1}\d{3}\d{4}\d{4}$"
                    required
                  />
                  <span className="error">{getError.aadhar}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="pans"
                  >
                    Pan No.<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="pan"
                    pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
                    required
                  />
                  <span className="error">{getError.pan}</span>
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="voters"
                  >
                    voter id.<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="voter"
                    pattern="^([a-zA-Z]){3}([0-9]){7}?$"
                    required
                  />
                  <span className="error">{getError.voter}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label
                    className="laa font-bold text-lg text-gray-700"
                    id="rations"
                  >
                    Ration No.<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="ration"
                    pattern="^([a-zA-Z0-9]){8,12}\s*$"
                    required
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
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="laa font-bold text-lg text-gray-700">
                    Areal Locality<span>*</span>:
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="areal"
                    required
                  />
                  <span className="error">{getError.areal}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="laa font-bold text-lg text-gray-700">
                    Land Mark:
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="Landmark"
                    required
                  />
                  <span className="error">{getError.Landmark}</span>
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="laa font-bold text-lg text-gray-700">
                    Post<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="post"
                    required
                  />
                  <span className="error">{getError.post}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="laa font-bold text-lg text-gray-700">
                    District<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="dist"
                    required
                  />
                  <span className="error">{getError.dist}</span>
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="flex flex-col w-2/5">
                  <label className="laa font-bold text-lg text-gray-700">
                    State<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="text"
                    name="state"
                    required
                  />
                  <span className="error">{getError.state}</span>
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="laa font-bold text-lg text-gray-700">
                    Pin Code<span>*</span>
                  </label>
                  <input
                    className="pro rounded-md bg-slate-300 w-full text-gray-700 cursor-pointer font-semibold"
                    onBlur={(e) => handleError(e)}
                    onChange={(e) => promotors(e)}
                    type="number"
                    name="pincode"
                    pattern="^[1-9]{1}\d{2}\s?\d{3}$"
                    required
                  />
                  <span className="error">{getError.pincode}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 items-end self-end justify-end mb-20  mr-44 mt-16">
            <input
              onClick={() => {}}
              type="button"
              value="CANCEL"
              className=" justify-end cursor-pointer  self-end items-end mr-12 tracking-wider  text-gray-500 text-xl leading-loose font-bold"
            />
            <input
              onClick={() => {
                submit();
                window.location.reload();
              }}
              type="button"
              value="SUBMIT"
              className="bg-red-600 cursor-pointer tracking-wider font-bold w-fit justify-end self-end items-end rounded-lg shadow-xl text-gray-50 px-6 py-1.5 text-xl"
            />
          </div>
        </form>
      </>
    </div>
  );
};
export default Motor;
