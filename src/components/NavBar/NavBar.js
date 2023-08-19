"use client";
import { Navbar } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { getaccount } from "../../API/api";
import { useState, useEffect } from "react";
import { Dropdown as DropdownFB } from "flowbite-react";

const NavBar = () => {
  const token = localStorage.getItem("jwtToken");
  // console.log("NAVBAR TOKEN ", token);
  // eslint-disable-next-line no-unused-vars
  const [getA, setA] = useState([]);
  useEffect(() => {
    set();
  }, []);
  const set = async () => {
    try {
      const account = await getaccount(token); // Pass the token to the API call
      setA(account.data);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    localStorage.removeItem("jwtToken"); // Remove token on logout
    navigate("/");
  };

  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 justify-between mx-auto w-full shadow-2xl bg-red-600"
    >
      <Navbar.Brand href="#">
        <span className="self-center px-10 whitespace-nowrap text-lg font-semibold text-gray-50 dark:text-white">
          Betiyan Nidhi Limited
        </span>
      </Navbar.Brand>
      {/* <div className="flex font-semibold text-lg md:order-2 stroke-gray-50 text-red-600 bg-gray-50 py-1 rounded-md px-4"> */}
      {/* <Dropdown title="Account Bank Book" id="h" name="accountno">
        {getA.map((element) => (
          <>
            <Dropdown.Item
              onClick={() => Test.set()}
              id="d"
              as={Link}
              to={"/bankbook/" + element.companyaccount}
            >
              {element.companyaccount}
            </Dropdown.Item>
          </>
        ))}
      </Dropdown> */}
      <Navbar.Toggle />
      {/* </div> */}
      <Navbar.Toggle />
      <div className="flex md:order-2 stroke-gray-50 text-gray-50  px-10">
        <DropdownFB
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownFB.Header>
            <span className="block text-sm">User Name</span>
            <span className="block truncate text-sm font-medium">
              username@nidhilimited.com
            </span>
          </DropdownFB.Header>
          <button
            onClick={handleSubmit}
            className="px-4 py-1 w-full text-left hover:bg-gray-100"
          >
            Sign out
          </button>
        </DropdownFB>
        <Navbar.Toggle />
      </div>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="/member">
          <p className="text-lg text-gray-50">Member</p>
        </Navbar.Link>
        <Navbar.Link href="/promotors">
          <p className="text-lg text-gray-50">Promoters</p>
        </Navbar.Link>
        <Navbar.Link href="/transaction">
          <p className="text-lg text-gray-50">Transaction</p>
        </Navbar.Link>
        <Navbar.Link href="/accopeningform">
          <p className="text-lg text-gray-50">New Account</p>
        </Navbar.Link>
        <Navbar.Link href="/cashbook">
          <p className="text-lg text-gray-50">Cash Book</p>
        </Navbar.Link>
        <Navbar.Link href="/bankbook">
          <p className="text-lg text-gray-50">Bank Book</p>
        </Navbar.Link>
        <div className="group inline-block relative"></div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
