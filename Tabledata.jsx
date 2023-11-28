import React, { useContext } from 'react'
import { newdata } from './Datasharing';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {} from './Edit'
function Tabledata() {
  const [data, setdata] = useContext(newdata);
  console.log(data);
    let history = useNavigate()

    const handleDelete =(id)=>{
        var index =data.map(function(e){
            return e.id
        }).indexOf(id);
        data.splice(index,1);
        history ('/');

    }
  

    
  
   
  
  return (
    <div style={{textAlign:'center'}}>
       <Table striped bordered style={{border:'1px solid'}} >
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>price</th>
         
          
        </tr>
      </thead>
      <tbody>
        {data.map((demo)=>
       
        <tr>
          <td><img src={demo.image} width={'50px'} height={'50px'}/></td>
          <td>{demo.name}</td>
          <td>{demo.price}</td>
          <td><Button style={{color:'white'}}> <Link to= {`/1/${demo.id}`}>View</Link></Button></td>
          <Link to='/create'><Button >Edit</Button></Link>
          <td><Button onClick={()=>handleDelete(demo.id)} >Delete</Button></td>
        </tr>
         )}
      </tbody>
    </Table> 
    <Link to='/c'><Button >Create</Button></Link>
    </div>
  )
}

export default Tabledata
