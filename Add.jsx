import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newdata } from './Datasharing';
import { Button } from 'react-bootstrap';

function Add() {
  const [data, setdata] = useContext(newdata);
  const [first, setfirst] = useState({
    name: "",
    price:"",
    ename:"",
  });
  const navigate = useNavigate();
  const create = (e)=>{
    const name=e.target.name;
    const value= e.target.value;
    setfirst({...first, [name]: value});
    // console.log(first);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    let i= first.id;
    let a= first.name;
    let b= first.price;
    console.log(i);
    data.push({
      id:i,
      name:a,
      price:b,
    });
    navigate("/");
  }

  return (
    <div>
      
      <label>Name:</label>
      <input type="text" value={data.name} name="name" onChange={create} />
      <br></br>
      <label>Price:</label>
      <input type="number" value={data.price} name="price" onChange={create}/>
      <br></br>
      <label>image:</label>
      <input type="file" value={data.image} name="image" onChange={create}/>
<Button onClick={(e)=> handleSubmit(e)} type="submit">Add</Button>
    </div>
  )
}

export default Add

