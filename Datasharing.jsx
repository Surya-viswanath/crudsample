import React, { useState } from 'react'
import { createContext } from 'react'
import details from './Datas'
import Datarouter from './Datarouter';
const newdata = createContext();
function Datasharing() {
    const [data, setdata] = useState(details)


  return (
    <div>
       <newdata.Provider value={[data,setdata]}>
        <Datarouter/>
      </newdata.Provider>
    </div>
  )
}

export default Datasharing
export {newdata}