import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { newdata } from "./Datasharing";

import React from 'react'
import { Button } from "react-bootstrap";

function Update() {
    const [data, setdata] = useContext(newdata);
    const navigate = useNavigate();
    const {id}= useParams();
    const [edata, setedata] = useState({
        name: "",
        price: "",
        ename: "",
    });
    useEffect(()=>{
        const editeddata = data.find((detail)=> detail.id ===id);
        if(editeddata){
            setedata({
                name: editeddata.name,
                price: editeddata.price,
                ename: editeddata.ename
            });
        }
    },[data,id]);
    const handleInputChange = (e)=>{
        setedata({
            ...edata,
            [e.target.name] : e.target.value,
        });
    };
    const handleUpdate = ()=>{
        const updateddata = data.map((detail)=>
        detail.id === id? {...detail,...edata}: detail
        );
        setdata(updateddata);
        navigate("/");

    };
  return (
    <div>
       <>
            <label>NAME:</label>
            <input type="text" value={edata.name} name="name" onChange={handleInputChange}></input>

            <label>PRICE:</label>
            <input type="text" value={edata.price} name="price" onChange={handleInputChange}></input>

            <label>ENAME:</label>
            <input type="text" value={edata.ename} name="ename" onChange={handleInputChange}></input>
            </>
            <Button onClick={handleUpdate}>Update</Button>
    </div>
  )
}

export default Update


