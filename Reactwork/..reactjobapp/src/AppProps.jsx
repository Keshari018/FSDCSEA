import React from 'react';
import Child1 from './component/child1';


function AppProps() {
  const data={
    Name:"Nitin",
    Branch:"CSE",
    Section:"A"
  }

  return (
    <div>
        AppProps
        <div>
         <Child1 child1data={data}/>    
        </div> 
    </div>
  )
}

export default AppProps;