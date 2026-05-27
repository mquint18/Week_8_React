import { useState } from 'react'

import './App.css'

function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    alert(email);
  }

  return (
    <div className="newdiv">

      <input type="email"  
      placeholder='Email' 
      onChange={(e) => setEmail(e.target.value)}
      />

      <input type="password"
      placeholder='Password'
      onChange={(e) => setPassword(e.target.value)}
      />

      <button className="clicky" onClick={login}>
        Log In
      </button>

    </div>
  );
    
}

export default App
