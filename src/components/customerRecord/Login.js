"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email1, password1 } = event.target.elements;

    if (email1.value === "ayush@gmail.com" && password1.value === "ayush@123") {
      navigate("/member");
    } else {
      toast.error("Invalid email or password");
    }
  };
  return (
    <div className="bg-slate-200 h-screen w-screen overflow-hidden">
      <h1 className="text-5xl mx-auto font-sans font-semibold text-center mt-20">
        Betiyan Nidhi Limited
      </h1>
      <form
        className="flex w-1/4 border-[1px] bg-white overflow-hidden scale-125 border-opacity-20 border-slate-700 shadow-md px-6 rounded-2xl py-8 mt-24 flex-col gap-4 mx-auto align-middle justify-items-center"
        onSubmit={handleSubmit}
      >
        <div>
          <h2 className="text-2xl font-normal opacity-75  text-slate-800 mb-4">
            Login
          </h2>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="Your Email"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" className="bg-gray-50" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button
          type="submit"
          className="bg-red-600 hover:bg-red-800 transition-all duration-200"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
