import React, { useContext } from 'react'
import { newdata } from './Datasharing';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Deatilphone() {
    const [data, setdata] = useContext(newdata);
    const {phoneid}= useParams();
    // console.log(phoneid);
    const newid = parseInt(phoneid);
    // console.log(Id);
    const datadetails = data.find(item => item.id === newid);
    console.log(datadetails);

  return (
    <div>
      
      <h1>Detail page</h1>
      
      {/* <img src='apple.jfif'></img> */}
      <Card style={{ width: '18rem',margin:'0.5%' }}>
       <Card.Img variant="top" src={datadetails.imagec} height={'200px'}/>
       <Card.Body>
         <Card.Title>Name :  {datadetails.name}</Card.Title>
         <Card.Text>Colour :  
           {datadetails.ename}<br></br>Price : {datadetails.price}<br></br>{datadetails.des}
         </Card.Text>
         
        
       </Card.Body>
     </Card>

    </div>
  )
}

export default Deatilphone
