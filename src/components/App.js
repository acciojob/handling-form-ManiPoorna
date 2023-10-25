
import React, { useEffect, useState } from "react";
import './../styles/App.css';


const App = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("value changed: ",name)
  },[name])
  return (
    <div>
        {/* Do not remove the main div */}
      <input onChange={(e)=>setName(e.target.value) } />
    </div>
  )
}

export default App
