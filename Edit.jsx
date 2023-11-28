import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { newdata } from './Datasharing';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form } from 'react-bootstrap';
import { useEffect } from 'react';

function Edit() {
  const [data, setdata] = useContext(newdata);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [id, setid] = useState("");

  let history = useNavigate();
    var index = data.map(function(e){
        return e.id
    })
    .indexOf(id);
    const handleedit =(e)=>{
        e.preventDefault();

        let a = data[index];
        a.name= name;
        a.price= price;
       
        
             
                history('/');
    }
    useEffect(() => {
    setname(localStorage.getItem('name'))
    setprice(localStorage.getItem('price'))
    

    }, [])
    
  return (
    <div>
      <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* setting a name from the 
                    input textfiled */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        value={name}
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>
 
                {/* setting a age from the input textfiled */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Control
                        value={price}
                        onChange={(e) =>
                            setprice(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                    />
                </Form.Group>
 
                {/* Hadinling an onclick event 
                    running an edit logic */}
                <Button
                    onClick={(e) => handleedit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>
 
                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
<Button onClick={(e)=> handleedit(e)} type="submit">update</Button>
    </div>
  )
}

export default Edit
