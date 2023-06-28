
import axios from "axios";

const URL="http://localhost:8000";
// const URL="https://bankserver-hao5.onrender.com";

export const addCash = async(data)=>{
   console.log("hii");
   try{
    return await axios.post(`${URL}/cash`,data);
   }
   catch(error)
   {
    console.log("error while calling add cash api",error);
   }
}

export const addChequeOnline =async(data)=>
{
   console.log(data);
   try{
      return await axios.post(`${URL}/online`,data);
   }
   catch(error)
   {
      console.log("error while calling addchequeonline api",error);
   }
}

export const getCash =async()=>
{
 try{
   return await axios.get(`${URL}/allCash`);
 }
 catch(error)
 {
   console.log("error while calling getCash api",error);
 }
}

export const getChequeOnline =async()=>
{
try{
   return await axios.get(`${URL}/allChequeOnline`);
}
catch(error)
{
   console.log("error while calling getChequeOnline api",error);
}
}

export const addPersonal=async(data)=>
{
 try{
 return await axios.post(`${URL}/personal`,data);
 }
 catch(error)
 {
   console.log("error while calling add personal api",error);
 }
}

export const addFinnacial =async (data)=>
{
   console.log(data);
   try{
      return await axios.post(`${URL}/finnacial`,data);
   }
   catch(error)
   {
      console.log("error while calling add finnacial api");
   }
}
export const membership=async(data)=>
{
   try{
      console.log(data);
      return await axios.post(`${URL}/membership`,data);
   }
   catch(error)
   {
      console.log("error while calling membership api ");
   }
}
export const getmembershipNo =async()=>
{
   try{
      return await axios.get(`${URL}/getmembershipnumber`);
   }
   catch(error)
   {
      console.log("error while calling getmembership number api");
   }
}

export const addpromotors =async(data)=>
{
   try{
   return await axios.post(`${URL}/addpromotors`,data);
   }
   catch(error)
   {
      console.log("error while calling add promotors api");
   }
}

export const account=async(data)=>
{
   try{
      return await axios.post(`${URL}/account`,data);
   }
   catch(error)
   {
      console.log("error while calling account api");
   }
}

export const getaccount=async()=>
{
   try{
      
      
      return await axios.get(`${URL}/getaccount`);
   }
   catch(error)
   {
      console.log("error while calling getaccount api");
      console.log(error);
   }
}

